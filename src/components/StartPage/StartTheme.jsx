import React from 'react';
import {THEME_DARK, THEME_DEFAULT, THEME_LIGHT, useTheme} from "../../Context/ContextProvider";
import imgLightTheme from "./img/light-side.eebc5217.jpg";
import imgDarkTheme from './img/dark-side.e0f8cab7.jpg';
import imgDefaultTheme from './img/falcon.c1d0a8d1.jpg';
import classname from "classname";
import classes from './StartTheme.module.scss';

const StartTheme = () => {

    const isTheme = useTheme();

    return (
        <div className={classes.container}>
            <div className={classname(classes.container_item,classes.container_item__light)}>
                <img className={classes.container__img} onClick={() => isTheme.change(THEME_LIGHT)} src={imgLightTheme}
                     alt=""/>
                <h2 className={classname(classes.title,classes.title__light)}>Light theme</h2>
            </div>
            <div className={classname(classes.container_item,classes.container_item__default)}>
                <img className={classes.container__img} onClick={() => isTheme.change(THEME_DEFAULT)}
                     src={imgDefaultTheme} alt=""/>
                <h2 className={classname(classes.title,classes.title__default)}>I'm Han Solo</h2>
            </div>
            <div className={classname(classes.container_item,classes.container_item__dark)}>
                <img className={classes.container__img} onClick={() => isTheme.change(THEME_DARK)} src={imgDarkTheme}
                     alt=""/>
                <h2 className={classname(classes.title,classes.title__dark)}>Dark theme</h2>
            </div>

        </div>
    );
};

export default StartTheme;

StartTheme.propTypes = {}