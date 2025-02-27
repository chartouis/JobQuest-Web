export const API_URL = "https://jobquest-api-pj0e.onrender.com"

export const getHeaders = () => ({
  Authorization: "Bearer " + localStorage.getItem("jwt"),
  "Content-Type": "application/json",
});