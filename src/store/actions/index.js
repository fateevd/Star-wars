import {ADD_PERSON_FAVORITE, REMOVE_PERSON_FAVORITE} from "../constans/actionTypes";

export const setPersonFavorite = person => ({
    type: ADD_PERSON_FAVORITE,
    payload: person,
})

export const removePersonFavorite = id => ({
    type: REMOVE_PERSON_FAVORITE,
    payload: id,
})
