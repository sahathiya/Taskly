import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/api/todo/all');

    if (response.status !== 200) {
      throw new Error('Failed to fetch todos');
    }

    const data = response.data.todos;
    console.log("Fetched todos:", data);

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});



export const fetchTodobyId = createAsyncThunk('todos/fetchTodobyId', async (todoId, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/api/todo/details/${todoId}`);

    if (response.status !== 200) {
      throw new Error('Failed to fetch todos');
    }

    const data = response.data.todo;
    console.log("Fetched todos by id:", data);

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});