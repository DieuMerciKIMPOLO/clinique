const initstate={
 signup:{
     error:null,
     spinner:false,
     message:null
 },
auth:{},
notAuth:{},
register_user:{
 error:null,
 spinner:null,
 message:null
}
}

const users = (state=initstate, action) => {
    switch (action.type) {
       case "REGISTER_USER":
           return {
               ...state.register_user, message:action.payload.message, error:null, spinner:false
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