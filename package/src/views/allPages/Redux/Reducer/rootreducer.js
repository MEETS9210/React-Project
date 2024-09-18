import { combineReducers } from "redux";
import crudReducer from "./crudreducer";
import { tokenreducer } from "./tokenreducer";

export const rootReducer = combineReducers({
    crud : crudReducer,
    token : tokenreducer,
})