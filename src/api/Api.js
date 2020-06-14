import axios from "axios";
const url = "https://www.googleapis.com/youtube/v3";
const proxy = "https://cors-anywhere.herokuapp.com/";

export default axios.create({
  baseURL: url,
});
