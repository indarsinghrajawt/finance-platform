import axios from "axios";

const API_KEY = "0434f2175b874bac815ac4188c35802a";

export const getNews = async () => {
    const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${API_KEY}`
    );

    return response.data.articles;
};