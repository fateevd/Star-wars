import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {setLocalStorage} from "../customFunction/localStorage";
import {favoriteReducer} from "./reducer/favoriteReducer";



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    setLocalStorage("store" ,store.getState().favoriteReducer)
})