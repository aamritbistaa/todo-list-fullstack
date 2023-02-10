// common service

import axios from "axios";
async function getUrlOnBackend(url, token) {
  const req = {
    method: "GET",
    headers: {
      Accept: "aplication/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    url,
    // params,
  };
  try {
    const response = await axios(req);
    return response.data;
  } catch (err) {}
}

const postDataToBackend = async (url, data, token) => {
  const req = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    url,
    data,
  };
  console.log(req, url, data);
  try {
    const response = await axios(req);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const deleteDataToBackend = async (url, token) => {
  console.log("to delete", url);
  const req = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    url,
  };
  console.log(url);
  try {
    const response = await axios(req);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const putUrlOnBackend = async (url, data, token) => {
  const req = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    url,
    data,
  };
  console.log(url, data);
  try {
    const response = await axios(req);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export {
  putUrlOnBackend,
  deleteDataToBackend,
  postDataToBackend,
  getUrlOnBackend,
};
