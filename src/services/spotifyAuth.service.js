import axios from "axios";
import qs from "qs";

const API_URL = "https://accounts.spotify.com/api/";

const data = qs.stringify({
  grant_type: "client_credentials",
  client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
});

const config = {
  method: "post",
  maxBodyLength: Infinity,
  url: `${API_URL}token`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: data,
};

const login = async () => {
  const response = await axios.request(config);
  //console.log(response.data);
  if (response.data.access_token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const AuthService = {
  login,
};

export default AuthService;
