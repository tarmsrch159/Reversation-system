// AuthService.js
import axios from "../api/axios";
import { Navigate } from "react-router-dom";

const AuthService = {
  login: async (username, password) => {
    const response = await axios.post(`/login_admin`, { username, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const adminData = response.data.result[0]
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("adminUsername", adminData.username)
      window.location = "/";
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminUsername");
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },

  
};

export default AuthService;
