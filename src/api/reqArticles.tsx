import axios from "axios";

export const reqArticles = axios.create({
  baseURL: "https://loi.com.uy",
});
