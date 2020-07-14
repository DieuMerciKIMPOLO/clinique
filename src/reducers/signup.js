const initstate={
    signup:{
        error:null,
        spinner:false,
        message:null
    },
   }
   
   const signup = (state=initstate, action) => {
       switch (action.type) {   
          case "SIGNUP":
              return{
                  ...state, signup:{
                      ...state.signup, message:action.payload.message, error:null, spinner:false
                  }
              }
          case "HANDLE_SIGNUP":
              return {
                  ...state, sigup:{
                      ...state.signup, message:null, spinner:true, error:null
                  }
              }
          case "REMOVE_SIGNUP_MESSAGES":
              return {
                  ...state, signup:{
                      ...state.signup, message:null, error:null, spinner:false
                  }
              }
           case "SIGNUP_ERROR":
               return {
                   ...state, signup:{
                       ...state.signup, message:null, error:action.payload, spinner:false
               }
           }
   
           default:
               return state
       }
   
   }
   
   export default signup