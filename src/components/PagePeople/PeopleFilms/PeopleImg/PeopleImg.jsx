import React from 'react';
import ProtoTypes from "prop-types";
import classes from "../PeopleIdInfo.module.scss";
import {useDispatch} from "react-redux";
import {removePersonFavorite, setPersonFavorite} from "../../../../store/actions";
import favoriteImg from "./img/favorite.svg";
import favoriteImgFill from "./img/favorite-fill.svg";


const PeopleImg = ({personName, img, id, setPersonToFavorite, personFavorite}) => {

    const dispatch = useDispatch();

    const dispatchFavorite = () => {
        if(personFavorite) {
            dispatch(removePersonFavorite(id));
            setPersonToFavorite(false);
        }
        else {
            dispatch(setPersonFavorite({
                [id]: {
                    name: personName,
                    img,
                }
            }))
            setPersonToFavorite(true);
        }
    }

    return (
        <div>
            <img className={classes.people__img} src={img} alt={personName}/>
            <img className={classes.favorite} onClick={dispatchFavorite} src={!personFavorite ? favoriteImgFill : favoriteImg} alt="favorite"/>
        </div>
    );
};

export default PeopleImg;

PeopleImg.protoTypes = {
    personName: ProtoTypes.string,
    img: ProtoTypes.string,
    id: ProtoTypes.number,
    setPersonToFavorite: ProtoTypes.func,
    personFavorite: ProtoTypes.bool,
}