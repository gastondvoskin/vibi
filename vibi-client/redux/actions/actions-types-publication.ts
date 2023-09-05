export const GET_PUBLICATIONS = "GET_PUBLICATIONS";
export const SET_PROPERTY = "SET_PROPERTY";
export const SET_PROPERTY_INFORMATION = "SET_PROPERTY_INFORMATION";
export const SET_PROPERTY_ADDRESS = "SET_PROPERTY_ADDRESS";
export const SET_PROPERTY_DETAIL = "SET_PROPERTY_DETAIL";
export const PUBLICATION = "PUBLICATION";
export const CREATE_PUBLICATION = "CREATE_PUBLICATION";


export interface GetPublicationsAction {
  type: 'GET_PUBLICATIONS';
  payload: {publications: [], totalPages: number};  
}
export interface CreatePublication {
  type: 'CREATE_PUBLICATION',
  payload: {}
}
