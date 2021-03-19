import { combineReducers,createStore } from "redux";
import {todoData} from "../reducers/index";

let rootReducer = combineReducers({
    todoData : todoData,
})


console.log("i am in store")

const store = createStore(rootReducer);

export default store