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



export function  initSession(){
  let instanceConnected;
  let instanceNotConnected;
  return (dispatch, getState)=>{
    if(localStorage.getItem("accessToken")){
        instanceNotConnected = axios.create({
          baseURL:`${BASE_URL}`,
          headers: {
              timeout: 1000,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          }
        });
        instanceConnected = axios.create({
          baseURL:`${BASE_URL}`,
          headers: {
              'Authorization':`Bearer ${localStorage.getItem("accessToken")}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          }
        }) 
        dispatch({type:"INIT_AXIOS_AUTH", payload:instanceConnected})
        dispatch({type:"INIT_AXIOS_NOT_AUTH", payload:instanceNotConnected})
        dispatch({type:"SIGNIN", payload:{
              accessToken: localStorage.getItem("accessToken"),
              refreshToken:localStorage.getItem("refreshToken"), 
              roles:       localStorage.getItem("roles"),
              email:       localStorage.getItem("email"),
              username:    localStorage.getItem("username"),
              id      :    localStorage.getItem("id")
            }});
    }else{
      instanceNotConnected = axios.create({
        baseURL:`${BASE_URL}`,
        headers: {
            timeout: 1000,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
      });
      dispatch({type:"INIT_AXIOS_NOT_AUTH", payload:instanceNotConnected})
    }
  }
}

export function handleLogout(){

  localStorage.removeItem("accessToken");
  localStorage.removeItem("username");
  localStorage.removeItem("id");
  localStorage.removeItem("refreshToken")
  localStorage.removeItem("roles");
  localStorage.removeItem("email");
  localStorage.removeItem("id");
  localStorage.removeItem("username")
  window.location="/signin"
}


