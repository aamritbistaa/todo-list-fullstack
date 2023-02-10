import { postDataToBackend } from "./Apiservice";

const LOCALURL = "http://localhost:8000";
export const setUserRegister = async ({ fullname, email, password }) => {
  try {
    const data = { fullname, email, password };
    const response = await postDataToBackend(`${LOCALURL}/user/register`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
