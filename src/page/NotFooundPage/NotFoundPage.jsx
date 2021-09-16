import React from 'react';
import {useLocation} from "react-router-dom";
import classes from "./NotFoundPage.module.scss";
import imgNotFound from "./img/not-found.jpg";


const NotFoundPage = () => {
    const location = useLocation();

    return (
        <div className={classes.notPage}>
            <img src={imgNotFound} alt="not page"/>
            <p className={classes.notPage__text}>Такой страницы не найдено <b className={classes.notPage__text_b}>{location.pathname}</b></p>
        </div>
    );
};

export default NotFoundPage;