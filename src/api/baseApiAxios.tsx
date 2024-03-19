import axios from "axios";

export const baseApiAxios = axios.create({
  baseURL: "https://a-7-l2-server.vercel.app/api/v1",
  timeout: 40000,
  headers: { "X-Custom-Header": "foobar" },
});

baseApiAxios.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
