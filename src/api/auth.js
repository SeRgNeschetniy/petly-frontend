import axios from "axios";

const instance = axios.create({
  baseURL: "",
})

const setToken = (token) => {
  if (token) {
    return instance.defaults.headers.common.authorization = `Bearer ${token}`;
  }
  instance.defaults.headers.common.authorization = ``;
}

export const signup = async (signupData) => {
  const { data } = await instance.post("/api/auth/register", signupData);
  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
  return data;
}

export const login = async (loginData) => {
  const { data } = await instance.post("/api/auth/login", loginData);
  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
  return data;
}

export const logout = async () => {
  const { data } = await instance.post("/api/auth/logout");
  return data;
}

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("/api/auth/current");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
}

export default instance;