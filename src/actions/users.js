
/**
 * FFunction allowing us to perform register process
 */
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

/**
 * Function allowing us to perform login process
 */
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
            window.location='/dashboard';
        }).catch((error)=>{
            if(error.response){
               dispatch({type:`${action}_ERROR`, payload:error.response.data.message})
            }else{
                
               dispatch({type:`${action}_ERROR`, payload:"Network Error"})
            }
            
        })
    }
    
}
/**
 * Global  function for authenticated get requests
 */
export function getItem(url, action){
    let instance;
    return (dispatch, getState)=>{
        instance=getState().users.auth;
        dispatch({type:`HANDLE_${action}`});
        instance.get(url).then((response)=>{
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
/**
 * Global function for authenticated post requests
 */
export function postItem(url, action, data){
    let instance;
    return (dispatch,getState)=>{
        instance=getState().users.auth;
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