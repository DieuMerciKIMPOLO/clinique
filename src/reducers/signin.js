const initstate={
    signin:{
        error:null,
        spinner:false,
        message:null,
        accessToken:null,
        refrechToken:null,
        authenticated:false,
        username:null,
        email:null,
        roles:[],
        id:null
    },
   }
   
   const signin = (state=initstate, action) => {
       switch (action.type) {
           case "SIGNIN":
            //    console.log("+++++=+++++",action.payload)
               return{
                   ...state, signin:{
                       ...state.signin, accessToken:action.payload.accessToken, error:null, spinner:false,
                       refrechToken:action.payload.refrechToken, authenticated:true,
                       username:action.payload.username, email:action.payload.email,
                       roles:action.payload.roles, id:action.payload.id
                   }
               }
           case "HANDLE_SIGNIN":
               return {
                   ...state, sigin:{
                       ...state.signin, accessToken:null, spinner:true, error:null,
                       authenticated:false, refrechToken:null
                   }
               }
           case "REMOVE_SIGNIN_MESSAGES":
               return {
                   ...state, signin:{
                       ...state.signin, message:null, error:null, spinner:false
                   }
               }
            case "SIGNIN_ERROR":
                return {
                    ...state, signin:{
                        ...state.signin, message:null, error:action.payload, spinner:false
                }
            }
    
           default:
               return state
       }
   
   }
   
   export default signin