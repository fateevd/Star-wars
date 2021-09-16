import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import classes from "./Favorite.module.scss";
import bookmarkIcon from "./img/bookmark.svg";
import {useSelector} from "react-redux";


const Favorite = () => {

    const selectStore = useSelector(state => state.favoriteReducer);
    const [count, setCount] = useState(null);

    useEffect(() => {
        const length = Object.keys(selectStore).length;
        length.toString().length < 2 ? setCount(length) : setCount('...');
    });

    return (
        <Link className={classes.link} to={"/favorite"}>
            <img className={classes.bookmark} src={bookmarkIcon} alt="favorite"/>
            <span className={classes.count}>{count}</span>
        </Link>
    );
};

export default Favorite;