import axios from "axios";
const BASE_URL = "http://localhost:1337/api";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      "Bearer a8cf61e69db13d80b0babc0cb2d4b503992bc748177d9dbd11f6a2d83d49973bbb3ee47fe91af464bd51f5994db980f3687ee6728214dffa0161e0ae04483b66f20ad2321beae499d534a4e350b402db7a1906074361d56f04edd76103bd0dd3898afd2f9c860da1fac1fbcfaa949e88b7651883ddc8a3e242d6880264b7ca2e",
  },
});

export default instance;
