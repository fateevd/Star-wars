import {ADD_PERSON_FAVORITE, REMOVE_PERSON_FAVORITE} from "../constans/actionTypes";
import {omit} from "lodash";
import {getLocalStorage} from "../../customFunction/localStorage";

const initialState = getLocalStorage("store");




export const favoriteReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_PERSON_FAVORITE:
            return {...state, ...action.payload}
        case REMOVE_PERSON_FAVORITE:
            return omit(state,[action.payload]);
        default:
            return state;
            break;
    }
}

