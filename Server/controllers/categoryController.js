const Category=require("../models/Category")


const AddCategory=async(req,res)=>{
const {name}=req.body

if(!name){
    return res.status(400).json({message:'name is required'})
}

const category=await Category.create({name,userId:req.user.id})


res.status(200).json({message:"category created",category})



}



const RemoveCategory=async(req,res)=>{
    const categoryId=req.params.id
    const category=await Category.findOne({where:{id:categoryId}})
    if(!category){
        return  res.status(404).json({message:"todo not found"})
    }

    await category.destroy()

    res.status(200).json({message:"category removed"})


}


const EditCategory=async(req,res)=>{

    const categoryId=req.params.id
    const{name}=req.body
    const category=await Category.findOne({where:{id:categoryId}})
     if(!category){
        return  res.status(404).json({message:"category not found"})
    }
    await category.update({
        name:name||category.name
    })

    res.status(200).json({message:"category updated",category})

}
const AllCategory=async(req,res)=>{
    const userId=req.user.id

    const categories=await Category.findAll({where:{userId:userId}})
    res.status(200).json({message:"all categories",categories})

}


module.exports={AddCategory,RemoveCategory,EditCategory,AllCategory}

