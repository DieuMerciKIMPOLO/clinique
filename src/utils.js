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


const authenticated=(token)=>{
    let instance;
    instance = axios.create({
        baseURL:`${BASE_URL}`,
        headers: {
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    return (dispatch)=>{
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
return dispatch({type:"INIT_AXIOS_NOT_AUTH", payload:instance})
   
}

export const initSession=(dispatch)=>{
  if(localStorage.getItem("Token")){
      authenticated(localStorage.getItem("Token"));
      notAuthenticated(dispatch)
  }else{
    notAuthenticated(dispatch)
  }

}
export const login=(data,dispatch)=>{
  
  localStorage.setItem("accessToken",data.accessToken);
  localStorage.setItem("refreshToken",data.refreshToken);
  localStorage.setItem("roles", data.roles)
  dispatch({type:"AUTHENTICATE", payload:{accessToken:data.accessToken,refreshToken:data.refreshToken, roles:data.roles}});
  dispatch({type:"SIGNIN", payload:{accessToken:data.accessToken,refreshToken:data.refreshToken,roles:data.roles,username:data.username,
                                    email:data.email,
                                    id:data.id
                                  }})
  initSession(dispatch);
  console.log("LOGIN")
}

