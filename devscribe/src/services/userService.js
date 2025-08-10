import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL 


export const login = async (email, password) => {
  try {

    const response = await axios.post(
      `${API_URL}/users/login`,
      { email, password },
      { withCredentials: true }
    );

    return response.data; // return only the actual data from API
  } catch (err) {
    throw err.response?.data || { message: "Server error" };
  }
};


export const signup = async (name, email, phoneNumber, password) =>{
    try {
        const response = await axios.post(
           `${API_URL}/users/register`,
           {name, email, phoneNumber, password},
           { withCredentials: true }
        )

        return response.data

    } catch (err) {
        throw err.response?.data || {message : "Server error"}
    }
}
