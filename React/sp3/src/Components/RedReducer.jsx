
export const ReducerFn=(state,action)=>{
    switch(action.type){
        case "Increase":{
            return state+action.payload;
        }
        case "Decrease":{
            return state-action.payload;
        }
        case "Reset":{
            return 0;
        }
        default:{
            return state;
        }
    }
}
