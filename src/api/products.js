import axios from "axios";

export const productsList = (params = {}) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/menu-items`, {
    params,
  });
};
