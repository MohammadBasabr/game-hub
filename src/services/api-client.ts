import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "10d7177fa46f412e8028b3da7c7edbb7",
  },
});
