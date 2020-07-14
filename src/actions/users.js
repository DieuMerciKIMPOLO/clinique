import { login } from "../utils";

export const registerUser=(url,action, data,dispatch, instance)=>{
     dispatch({type:`HANDLE_${action}`});
     return instance.post(url,data).then((response)=>{
         dispatch({type:action, payload:response.data})
     }).catch((error)=>{
         console.log(error, "####", Object.keys(error),error.toJSON,error.response, error.isAxiosError, error.request, error.config)
         if(error.response){
            dispatch({type:`${action}_ERROR`, payload:error.response.data.message})
         }else{
             
            dispatch({type:`${action}_ERROR`, payload:"Network Error"})
         }
         
     })

}

export const LoginUser=(url,action, data,dispatch, instance)=>{

    dispatch({type:`HANDLE_${action}`});
    return instance.post(url,data).then((response)=>{
        console.log(response.data)
        dispatch({type:action, payload:response.data})
        login(response.data, dispatch);
        window.location.href='/dashboard'
    }).catch((error)=>{
        if(error.response){
           dispatch({type:`${action}_ERROR`, payload:error.response.data.message})
        }else{
            
           dispatch({type:`${action}_ERROR`, payload:"Network Error"})
        }
        
    })

}