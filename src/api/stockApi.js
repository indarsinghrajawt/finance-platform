import axios from "axios";

const API_KEY = "d8r0hs1r01quatdasbf0d8r0hs1r01quatdasbfg";

export const getStockData = async (symbol) => {
  try {
    const response = await axios.get(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
    );

    console.log("DATA =", response.data);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};