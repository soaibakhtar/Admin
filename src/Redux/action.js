import axios from "axios";
import { GET_DATA_FAILED, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes";

const getDataReq=()=>({type:GET_DATA_REQUEST});
const getDataSucc=(payload)=>({type:GET_DATA_SUCCESS, payload});
const getDataFailed=()=>({type:GET_DATA_FAILED})

const baseUrl="https://json-server-ut6e.onrender.com";

// ------------------Get data----------------------------------------------

export const getData=()=>async(dispatch)=>{
  dispatch(getDataReq())
    try{
    const res=await axios.get(`${baseUrl}/data`)
    dispatch(getDataSucc(res.data))
    console.log(res);
    }catch(err){
        dispatch(getDataFailed())
   }
}

//Post

export const postData=(data)=>{
    return async(dispatch)=>{
        dispatch(getDataReq())
        try{
            const res=await axios.post(`${baseUrl}/data`,data)
            dispatch(getDataSucc(res.data))
        }catch(err){
            dispatch(getDataFailed())
        }
    }
}

// export const data=()=>{
//     return async(dispatch)=>{
//         dispatch(getDataReq())
//         try{
//             const res=await axios.get(baseUrl)
//             dispatch(getDataSucc(res.data))
//         }catch(err){
//             dispatch(getDataFailed())
//         }
//     }
// }