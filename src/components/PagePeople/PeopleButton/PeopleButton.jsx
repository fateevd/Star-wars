import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import UiButton from "../../../Ui-Kit/UiButton/UiButton";
import classes from "./PeopleButton.module.scss";


const PeopleButton = ({nextPage, presPage, current, getUrl}) => {

    const nextPageButton = () => {
        getUrl(nextPage);
    }
    const presPageButton = () => {
        getUrl(presPage);
    }

    return (
        <div className={classes.container__btn}>
            <Link to={`/people/?page=${current - 1}`}>
                <UiButton disabled={!presPage} onClick={presPageButton} className="">Pres</UiButton>
            </Link>
            <Link to={`/people/?page=${current + 1}`}>
                <UiButton disabled={!nextPage} onClick={nextPageButton} className="">Next</UiButton>
            </Link>
        </div>
    );
};

export default PeopleButton;

PeopleButton.propTypes = {
    nextPage: PropTypes.string,
    presPage: PropTypes.string,
    current: PropTypes.number,
    getUrl: PropTypes.func,
}