import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../redux/reducer";

export const store = createStore(reducer, applyMiddleware(thunk));
