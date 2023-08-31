import { GET_PUBLICATIONS } from "./actions-types";
import axios from "axios";

export const getPublicationsAction = () => {
  const API_URL = "http://localhost:3001/api/publication/";
  return async (dispatch: any) => {
    try {
      const response = await axios.get(API_URL);
      const publications = response.data;
      dispatch({
        type: GET_PUBLICATIONS,
        payload: publications,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};



/* export const filterByCreator = (creator) => {
    return {
        type: FILTER_BY_CREATOR,
        payload: creator
    };
}; */
