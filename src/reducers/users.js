const initstate={
auth:{},
notAuth:{},
user_credentials:{
    accessToken:null,
    refreshToken:null,
    roles:[],  
}
}

const users = (state=initstate, action) => {
    switch (action.type) {
       case "AUTHENTICATE":
           return{
               ...state, user_credentials:{
                   ...state.user_credentials, accessToken: action.payload.accessToken,
                   refreshToken:action.payload.refreshToken, roles:action.payload.roles
               }
           }
       case "INIT_AXIOS_AUTH":
           return{
               ...state, auth:action.payload
           }
        case "INIT_AXIOS_NOT_AUTH":
            return{
                ...state, notAuth:action.payload
            }
        default:
            return state
    }

}

export default users