
export const registerUser=(url,action, data,dispatch, instance)=>{
     dispatch({type:`HANDLE_${action}`});
     return instance.post(url,data).then((response)=>{
         dispatch({type:action, paylaod:response.data})
     }).catch((error)=>{
         dispatch({type:`${action}_ERROR`, paylaod:error.data})
     })

}
export const handleRegisterUser=(action,dispatch)=>{
    return dispatch({type: action})
}