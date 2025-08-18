import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL 


export const createPost  = async(title, content, tags, topics, coverImage, contentHTML ) =>{
    try{
        const postResponse = await axios.post(
      `${API_URL}/posts/create-post`,
      { title, content, tags, topics, coverImage, contentHTML},
      { withCredentials: true }
    );

    return postResponse.data


    } catch (err) {
        throw err.response?.data || { message: "Server error" };
    }
}



export const getAllPosts = async () => {
    try {
        const allPosts = await axios.get(
            `${API_URL}/posts/all-post`,
            { withCredentials: true }
        )
        return allPosts.data

    } catch (err) {
        throw err.response?.data || { message: "Server error" };
    }
}