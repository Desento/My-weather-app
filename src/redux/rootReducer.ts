import { combineReducers } from "redux";
import locationReducer from './reducers/locationReducer';

export const rootReducer = combineReducers({ weather: locationReducer })