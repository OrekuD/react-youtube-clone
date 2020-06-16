import axios from "axios";
const url = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL: url,
});
