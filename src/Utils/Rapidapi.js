import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchdata = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options); // Correct format here
    return data;
  } catch (error) {
    console.error("error fetching API data", error); // Correct spelling here
    throw error;
  }
};
