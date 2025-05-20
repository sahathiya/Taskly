const User=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const UserRegistration=async(req,res)=>{
    const {name,email,password}=req.body
  
   
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

   
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
 const token = jwt.sign(
    { id: newUser.id, email: newUser.email },
    process.env.USER_SECRETKEY,
    { expiresIn: "1d" }
  );
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  });
    res.status(201).json({ message: "User created successfully", user: newUser });

}



const UserLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }

  const user = await User.findOne(({ where: { email } }));
  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "password is not match" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.USER_SECRETKEY,
    { expiresIn: "1d" }
  );
  res.cookie("token", token, {
    httpOnly: false,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res
    .status(200)
    .json({ status: "success", message: "login successful", user });
};

const UserLogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.status(200).json({ message: "User Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Logout failed", error: error.message });
  }
};

const AllUsers=async(req,res)=>{
    console.log("gggg");
    
const users=await User.findAll()
console.log("users",users);

res.json(users);
}


module.exports={AllUsers,UserRegistration,UserLogin,UserLogout}