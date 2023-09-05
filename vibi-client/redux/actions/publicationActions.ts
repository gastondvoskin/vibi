import instance from "../../utils/axiosconfig";
import { GET_PUBLICATIONS } from "./actions-types";


export const getPublicationsAction = (page:number) => {
  const API_URL = `publication/?page=${page}`;
  return async (dispatch: any) => {
    try {
      const response = await instance.get(API_URL);
      console.log(response)
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
