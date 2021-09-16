import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import ListPeople from "../../components/PagePeople/ListPeople";
import  classes from"./Favorite.module.scss";

const Favorite = () => {

    const selectStore = useSelector(state => state.favoriteReducer)
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const array = Object.entries(selectStore);

        const peopleData = array.map(item => {
            return {
                id: item[0],
                ...item[1],
            }
        });
        setPeople(peopleData);


    }, []);

    return (
        <div className={classes.favorite}>
            <h2 className="header__title">Your Favorite</h2>
            {people.length
                ? <ListPeople pers={people}/>
                : <h1 className={classes.not_favorite}>Not, favorite</h1>
            }

        </div>
    );
};

export default Favorite;