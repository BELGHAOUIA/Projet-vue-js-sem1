import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/BELGHAOUIA/events",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    //"Access-Control-Allow-Origin": "*",
  },
});

export default {
  getBooks() {
    return apiClient.get("/books");
  },
  // putUsers(newUser) {
  //   return apiClient.post("/users", newUser);
  // },
  getBookById() {
    //return apiClient.get(`/books/this.$route.params.id = ${id}`);
  },
};
