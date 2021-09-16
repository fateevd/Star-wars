import React from 'react';
import img from "./img/go-back-arrow.svg";
import classes from "./UiGoBack.module.scss";
import {useHistory} from "react-router-dom";


const UiGoBack = () => {

    const goBack = useHistory();

    const goBackPage = () => {
        goBack.goBack();
    }

    return (
        <button className={classes.back} onClick={goBackPage}>
            <img className={classes.back__go} src={img}/>
            <span className={classes.back__text}>Go Back</span>
        </button>
    );
};

export default UiGoBack;