import React from 'react';
import PropTypes from "prop-types";
import cn from "classname";
import lightSaber from "./img/960px-Dueling_lightsabers.svg.png"
import classes from "./UiSearchInput.module.scss";
const UiSearchInput = ({setResponseSearch,value, handleSearch, placeholder}) => {


    return (
        <div className={classes.wrapper}>
            <input type="text"
                   value={value}
                   onChange={e => handleSearch(e.target.value)}
                   placeholder={placeholder}
                   className={classes.input}
                   key="random1"
            />
            <img onClick={() => value && handleSearch('') }
                 className={cn(classes.clear,  !value && classes.clear_disabled )}
                 src={lightSaber}
                 alt="clear input"/>
        </div>

    );
};

export default UiSearchInput;

UiSearchInput.protoTypes = {
    value: PropTypes.string,
    hadRecentInput: PropTypes.func,
    placeholder: PropTypes.string,
    setResponseSearch: PropTypes.string,
}