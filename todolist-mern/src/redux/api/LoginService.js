import { postDataToBackend } from "./Apiservice";

const LOCALURL = "http://localhost:3000";

export const login = async ({ email, password }) => {
  try {
    const data = { email, password };
    const response = await postDataToBackend(`${LOCALURL}/login`, data);
    localStorage.setItem("token", response.data.token);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
