
export function registerUser(url,action,data){
    let instance
    return(dispatch, getState)=>{
        instance=getState().users.notAuth;
        dispatch({type:`HANDLE_${action}`});
        instance.post(url,data).then((response)=>{
            dispatch({type:action, payload:response.data})
        }).catch((error)=>{
            if(error.response){
               dispatch({type:`${action}_ERROR`, payload:error.response.data.message})
            }else{
                
               dispatch({type:`${action}_ERROR`, payload:"Network Error"})
            }
            
        })
    }  

}


export function LoginUser(url,action,data){
    let instance;
    return (dispatch, getState)=>{
        instance=getState().users.notAuth
        console.log(getState().users)
        dispatch({type:`HANDLE_${action}`});
        instance.post(url,data).then((response)=>{
            dispatch({type:action, payload:response.data})
            localStorage.setItem("accessToken",response.data.accessToken);
            localStorage.setItem("refreshToken",response.data.refreshToken);
            localStorage.setItem("roles", response.data.roles);
            localStorage.setItem("email", response.data.email);
            localStorage.setItem("id", response.data.id);
            localStorage.setItem("username", response.data.username)

        }).catch((error)=>{
            if(error.response){
               dispatch({type:`${action}_ERROR`, payload:error.response.data.message})
            }else{
                
               dispatch({type:`${action}_ERROR`, payload:"Network Error"})
            }
            
        })
    }
    
}