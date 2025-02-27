export const API_URL = "https://jobquest-api-ai4d.onrender.com";

export const getHeaders = () => ({
  Authorization: "Bearer " + localStorage.getItem("jwt"),
  "Content-Type": "application/json",
});