// state change  delete post   ---> reducer
//api involvement --> extrareducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodosAPI,
  updateTodoById,
  deleteDataToApi,
  deleteAllDataToApi,
} from "../api/TodoListService";
// import { addTodosApi, updateTodoById } from "../api/TodoListService";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  todos: [],
  status: STATUSES.IDLE,
  token: "",
  isLoggedIn: false,
};

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const res = await fetch("http://localhost:8000/todolist");
  const data = await res.json();
  // console.log(data, "data");
  return data;
});

export const addTodos = createAsyncThunk("todos/add", async (val) => {
  //   const res = await addTodosApi(val);
  const res = await addTodosAPI(val);
  const data = await res.json();
  return data;
});

export const updateTodos = createAsyncThunk(
  "todo/update",
  async ({ id, value, done }) => {
    const res = await updateTodoById({ id, value, done });
    const data = await res.json();
    return data;
  }
);
export const deleteTodos = createAsyncThunk("todo/delete", async ({ id }) => {
  console.log(id, "slicetodo");
  const res = await deleteDataToApi({ id });
  const data = await res.json();
  return data;
});

// export const deleteAllTodos = createAsyncThunk("todo/delete", async () => {
//   const res = await deleteAllDataToApi();
//   const data = await res.json();
//   return data;
// });

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos.push(action.payload);
    },
    setDeletePost: (state, action) => {
      console.log("delete");
      state.todos = state.todos.filter((i) => i.id !== action.id);
    },

    editTodos: (state, action) => {},
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    listTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        // console.log(action, "action");
        state.todos = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
      });
  },
});

export const { setTodos, setDeletePost, setStatus, listTodos } =
  todoSlice.actions;

export default todoSlice.reducer;

// export function fetTodos() {
//   return async function fetchTodosThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     // const props = getState().data; // to get the data from state
//     try {
//       const res = await fetch("http:localhost:8000/todo");
//       const data = await res.json();
//       console.log(data);
//       dispatch(listTodos(data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (err) {
//       dispatch(setStatus(STATUSES.ERROR));
//       console.log(err);
//     }
//   };
// }
