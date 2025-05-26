const Todo=require("../models/Todo")
const Category=require("../models/Category")
const AddTodo=async(req,res)=>{
    console.log("gyggggkkk");
    
    const{title,description,dueDate,priority,category}=req.body

    if(!title||!description||!dueDate||!priority||!category){
        return res.status(400).json({message:"all fields are required"})

    }
    
    const todo=await Todo.create({
        userId:req.user.id,
        title,
        description,
        dueDate,
        priority,
        category,
        createdAt:Date.now()

    })


    res.status(200).json({message:"todo created",todo})
}


const TodoById=async(req,res)=>{
const todoId=req.params.id

 const todo=await Todo.findOne({where:{id:todoId}})
    if(!todo){
        return  res.status(404).json({message:"todo not found"})
    }

     
   
        res.status(200).json({message:"todo details",todo})
    

}
const CompleteTodo=async(req,res)=>{
    const todoId=req.params.id
    const todo=await Todo.findOne({where:{id:todoId}})
    if(!todo){
        return  res.status(404).json({message:"todo not found"})
    }
    const newStatus = todo.status === "Completed" ? "Pending" : "Completed";

    await todo.update({ status: newStatus });


      res.status(200).json({message:"todo completed"})
}

const RemoveTodo=async(req,res)=>{
    const todoId=req.params.id
    const todo=await Todo.findOne({where:{id:todoId}})
    if(!todo){
        return  res.status(404).json({message:"todo not found"})
    }

    await todo.destroy()

    res.status(200).json({message:"todo removed"})


}


const EditTodo=async(req,res)=>{

    const todoId=req.params.id
    const{title,description,dueDate}=req.body
    const todo=await Todo.findOne({where:{id:todoId}})
     if(!todo){
        return  res.status(404).json({message:"todo not found"})
    }
    await todo.update({
        title:title||todo.title,
        description:description||todo.description,
        dueDate:dueDate||todo.dueDate
    })

    res.status(200).json({message:"todo updated"})

}
const AllTodo=async(req,res)=>{
    const userId=req.user.id

    const todos=await Todo.findAll({where:{userId:userId}})
// ,include: [{
//         model: Category,
//         attributes: ['id', 'name']
//       }]

      
    res.status(200).json({message:"all todos",todos})

}



const SortBasedonDate=async(req,res)=>{

const {date}=req.body
  if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    const todos = await Todo.findAll({
      where: {
        dueDate: date
      },
      order: [['createdAt', 'DESC']] // You can change sorting field and order
    });

    res.status(200).json(todos);


}

const CurrentDateTodo=async(req,res)=>{

    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

    const todos = await Todo.findAll({
      where: {
        dueDate: today
      },
      order: [['createdAt', 'DESC']] // Optional: sort by priority, etc.
    });

    res.status(200).json(todos);

}


const TodoByCategory=async(req,res)=>{
    const {category}=req.body

    const todos=await Todo.findAll({where:{category:category}})
    if(!todos){
         return  res.status(404).json({message:"todos not found"})
    }


      res.status(200).json({message:"todos",todos})
}
module.exports={AddTodo,RemoveTodo,AllTodo,EditTodo,CompleteTodo,TodoById,SortBasedonDate,CurrentDateTodo,TodoByCategory}