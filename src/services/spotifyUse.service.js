import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://api.spotify.com/v1/artists/";

const getArtist = async (id) => {
  const token = authHeader();
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${API_URL}${id}`,
    headers: token,
  };
  return await axios
    .request(config)
    .then(async (response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const SpotifyService = {
  getArtist,
};

export default SpotifyService;
