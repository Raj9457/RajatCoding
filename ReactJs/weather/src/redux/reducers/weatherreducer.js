

let store_data={
    weatherinfo:{},
}

export const weatherReducer=(state=store_data,action)=>{
    if(action.type==="FETCH_WEATHER"){
        state={...state,weatherinfo:action.payload}
        return state;
    }
    else {
        return state;
    }
}