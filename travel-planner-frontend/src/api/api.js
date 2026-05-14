// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8080/api'
// });
// const API_BASE = "http://localhost:8080";

// export const authFetch = async (url, options = {}) => {
//   const token = localStorage.getItem("token");

//   const headers = {
//     "Content-Type": "application/json",
//     ...(token && { Authorization: `Bearer ${token}` }),
//     ...options.headers,
//   };

//   const res = await fetch(`${API_BASE}${url}`, {
//     ...options,
//     headers,
//   });

//   if (res.status === 401 || res.status === 403) {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//     return;
//   }

//   return res.json();
// };

// export default api;



import axios from "axios";


const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`
});

const API_BASE = `${process.env.REACT_APP_API_URL}`;

export const authFetch = async (url, options = {}) => {

  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const res = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers,
  });

  // AUTH ERROR
  if (res.status === 401 || res.status === 403) {

    localStorage.removeItem("token");
    window.location.href = "/login";

    return null;
  }

  // HANDLE EMPTY RESPONSE
  const text = await res.text();

  try {

    return text ? JSON.parse(text) : {};

  } catch (err) {

    console.error("JSON parse error:", err);

    return {};
  }
};

export default api;