const axios = require("axios");
require("dotenv").config();

const api_key = process.env.API_KEY;

const fetchData = async (url) => {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": api_key,
      },
    };

    const { data } = await axios(config);
    return data;
  } catch (error) {
    return { Eroor: "error" };
  }
};

module.exports = fetchData;
