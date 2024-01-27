import { GET_DATA_FAILED, GET_DATA_REQUEST, GET_DATA_SUCCESS, POST_DATA_FAILED, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./actionTypes";

const initialState = {
    data: [],
    loading: false,
    error: false
};

export const reducer=(state=initialState,{type,payload}) =>{
    switch(type){
        case GET_DATA_REQUEST:
            return {
              ...state,
                loading: true
            }
        case GET_DATA_SUCCESS:
            return {
              ...state,
                loading: false,
                data: payload
            }
        case GET_DATA_FAILED:
            return {
              ...state,
                loading: false,
                error: true
            }
        case POST_DATA_REQUEST:
            return {
            ...state,
                loading: true
            }
        case POST_DATA_SUCCESS: 
        return {
         ...state,
            loading: false,
            data: payload
        }
        case POST_DATA_FAILED:
            return {
             ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}