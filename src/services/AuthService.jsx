import axios from 'axios';

const urlApi = process.env.REACT_APP_URL_API;

export const validToken = async ({ token }) => {
  const result = await axios.get(`${urlApi}/auth/validtoken`, {
    headers: {
      token,
    },
  });

  return result.data;
};
