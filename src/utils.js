import { createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios'
import { BASE_URL } from './config';
// import { useDispatch } from 'react-redux'

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
const notAuthenticated=(dispatch)=>{
let instance;
instance = axios.create({
    baseURL:`${BASE_URL}`,
    headers: {
         timeout: 1000,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})   
console.log("dispatch",instance)
return dispatch({type:"INIT_AXIOS_NOT_AUTH", payload:instance})
   
}
function detectInit(dispatch){
  // const  = useDispatch()
  return dispatch({type:"DETECT_INIT", payload:"GDLTE"})
}
export const initSession=(dispatch)=>{
  detectInit(dispatch);
  if(localStorage.getItem("Token")){
      authenticated(localStorage.getState("Token"));
      notAuthenticated(dispatch)
  }else{
    notAuthenticated(dispatch)
  }

}
export const login=(Token, Refresh)=>{
  localStorage.setItem("Token",Token);
  localStorage.setItem("Refresh",Refresh);
  initSession();
}