import axios from "axios";

const API_KEY = "Z528QFJ3LA1Z2LSU";

export const getStockData = async (symbol) => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};