import { Dispatch } from 'redux';
import instance from "../../utils/axiosconfig";
import { CreatePublication, GET_PUBLICATIONS, GetPublicationsAction } from "./actions-types-publication";
import axios from 'axios';



export const getPublicationsAction = (page:number) => {
  const API_URL = `publication/?page=${page}`;
  
  return async (dispatch: Dispatch<GetPublicationsAction>) => {
    try {
      //!FALTA PONER UN TIPADO PARA EL GET
      const response = await instance.get(API_URL); 
      const publications = response.data;
      dispatch({
        type: GET_PUBLICATIONS,
        payload: publications.publications,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
};


export type publicationActions = GetPublicationsAction | CreatePublication