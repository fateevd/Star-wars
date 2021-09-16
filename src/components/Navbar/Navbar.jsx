import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.scss";
import Favorite from "../Favorite/Favorite";
import {THEME_DARK, THEME_DEFAULT, THEME_LIGHT, useTheme} from "../../Context/ContextProvider";
import imgDroid from "./img/droid.svg";
import imgSpaceStation from "./img/space-station.svg";
import imgLightSaber from "./img/lightsaber.svg";

const Navbar = () => {
    const isTheme = useTheme();
    const [icon, setIcon] = useState(imgLightSaber)
    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_DARK:
                setIcon(imgSpaceStation);
                break;
            case THEME_LIGHT:
                setIcon(imgLightSaber);
                break;
            case THEME_DEFAULT:
                setIcon(imgDroid);
                break;
            default:
                setIcon(imgDroid);
                ;
        }
    }, [isTheme])

    return (
        <div className={classes.container}>
            <img className={classes.logo} src={icon} alt="logo"/>
            <nav className={classes.nav}>
                <NavLink className={classes.nav__link} to="/start">Start</NavLink>
                <NavLink className={classes.nav__link} to="/people/?page=1">Personal</NavLink>
                <NavLink className={classes.nav__link} to="/search">Search</NavLink>
            </nav>
            <Favorite/>
        </div>
    );
};

export default Navbar;