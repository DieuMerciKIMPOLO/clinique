import { createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios'
import { BASE_URL } from './config';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#ff3d00",
    },
  },
});

export const initSession=()=>{

    if(localStorage.getItem("Token")){
        authenticated(localStorage.getState("Token"));
        notAuthenticated()
    }else{
      notAuthenticated()
    }

}
const authenticated=(token)=>{
    let instance;
    instance = axios.create({
        baseURL:`${BASE_URL}`,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    return (dispatch, getState)=>{
        dispatch({type:"INIT_AXIOS_AUTH", payload:instance})
    }
}
const notAuthenticated=()=>{
let instance;
instance = axios.create({
    baseURL:`${BASE_URL}`,
    headers: {
        'Authorization': '',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})   
return (dispatch, getState)=>{
    dispatch({type:"INIT_AXIOS_NOT_AUTH", payload:instance})
   }
}
export const login=(Token, Refresh)=>{
  localStorage.setItem("Token",Token);
  localStorage.setItem("Refresh",Refresh);
  initSession();
}