import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {todoReducer} from "./todoReducer/todoReducer";

export const store = createStore(
    todoReducer,
    composeWithDevTools()
)