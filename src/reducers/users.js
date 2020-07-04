const initstate={
 signup:{
     error:null,
     spinner:false,
     message:null
 },
auth:{},
notAut:{}
}

const users = (state=initstate, action) => {
    switch (action.type) {
       case "INIT_AXIOS_AUTH":
           return{
               ...state, auth:action.paylaod
           }
        case "INIT_AXIOS_NOT_AUTH":
            return{
                ...state, notAut:action.paylaod
            }
        default:
            return state
    }

}

export default users