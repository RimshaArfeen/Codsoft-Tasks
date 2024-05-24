import axios from 'axios';

const api = 'PnFtKqmB8eFnhFtkJRQVPkSBCrX4rKJm0ixZL2cstU4oQ5VwAqWFINHe'; // Replace with your actual API key
const url = "https://api.pexels.com/v1/search";

export const fetch_imgs = async (query = 'food', per_page = 8) => {
  const res = await axios.get(url, {
    headers: {
      Authorization: api
    },
    params: {
      query,
      per_page
    }
  });
  return res.data.photos;
};
