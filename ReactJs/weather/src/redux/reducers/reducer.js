import { combineReducers } from "redux";
import { weatherReducer } from "./weatherreducer";

export const reducers=combineReducers({
    WeatherReducer:weatherReducer,
})