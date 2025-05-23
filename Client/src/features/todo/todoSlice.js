import { createSlice } from "@reduxjs/toolkit";
import { fetchTodobyId, fetchTodos } from "./todoActions";


const todoSlice=createSlice({
    name:'todo',
    initialState:{todos:[],loading:false,error:null,todo:null,isEdit:false,showAddModal:false},
    reducers:{
        setTodos:(state,action)=>{
            const todoId=action.payload
    state.todos=state.todos.map(todo =>
    todo.id === todoId
      ? { ...todo, status: todo.status === "Completed" ? "Pending" : "Completed" }
      : todo
  );
            
        },
        setisEdit:(state,action)=>{
            state.isEdit=action.payload

        },
        setshowAddModal:(state,action)=>{
            state.showAddModal=action.payload
        },
        resetTodo:(state)=>{
            state.todo=null,
            state.isEdit=false
        }
    },
    extraReducers:(builder)=>{
             builder
          .addCase(fetchTodos.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
          })
          .addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })



          .addCase(fetchTodobyId.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchTodobyId.fulfilled, (state, action) => {
            state.loading = false;
            state.todo = action.payload;
          })
          .addCase(fetchTodobyId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
        }

})

export const{setTodos,setisEdit,setshowAddModal,resetTodo}=todoSlice.actions

export default todoSlice.reducer