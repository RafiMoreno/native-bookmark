import axios from "axios";

export const axiosClient  =  axios.create({
    baseURL: `https://dummyapi.online/api`
})
  
export const getAllArticles = () => {
    return axiosClient.get(`/blogposts/`)
  }