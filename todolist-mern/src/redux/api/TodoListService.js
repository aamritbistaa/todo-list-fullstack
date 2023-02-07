import {
  getUrlOnBackend,
  postDataToBackend,
  putUrlOnBackend,
  deleteDataToBackend,
} from "./Apiservice";

// import LOCALURL from "./env";
// import LOCALURL from "./env";
const LOCALURL = "http://localhost:8000";

export const addTodosAPI = async (val) => {
  const response = await postDataToBackend(`${LOCALURL}/todolist`, {
    value: val.text,
  });
  return response;
};

export const updateTodoById = async ({ id, value, done }) => {
  const response = await putUrlOnBackend(`${LOCALURL}/todolist/${id}`, {
    value,
    done,
  });
  return response;
};

export const deleteDataToApi = async ({ id }) => {
  const response = await deleteDataToBackend(`${LOCALURL}/todolist/${id}`, {});
  return response;
};

export const deleteAllDataToApi = async () => {
  const response = await deleteDataToBackend(`${LOCALURL}/todolist`, {});
  return response;
};
