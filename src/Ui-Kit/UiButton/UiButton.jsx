import React from 'react';
import cs from "classname";
import classes from "./UiButton.module.scss";
import PropTypes from "prop-types";

const UiButton = ({children, theme='dark', ...props}) => {
    return (
        <button {...props} className={cs(classes.ui_btn, classes[theme])}>
            {children}
        </button>
    );
};

export default UiButton;

UiButton.propTypes = {
    props: PropTypes.array,
    children: PropTypes.string,
    theme: PropTypes.string,
}