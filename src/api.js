import axios from 'axios';

const BASE_URL = 'http://hn.algolia.com/api/v1';

export const searchHackerNews = async (query, tags = 'story') => {
  try {
    const response = await axios.get(`${BASE_URL}/search?query=${query}&tags=${tags}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/items/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
