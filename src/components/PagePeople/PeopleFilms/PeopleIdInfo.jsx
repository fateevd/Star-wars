import React from 'react';
import PropTypes from "prop-types";

import classes from "./PeopleIdInfo.module.scss";

const PeopleIdInfo = ({personInfo , id}) => {

    return (
        <div className={classes.main__info}>
            {personInfo.map(({height, mas, hair_color, gender, birth_year}) => {
                    return (
                        <ul className={classes.item} key={id}>
                            <li className={classes.item__list}>Height: {height}  </li>
                            <li className={classes.item__list}>Mas: {mas}</li>
                            <li className={classes.item__list}>Hair color: {hair_color}  </li>
                            <li className={classes.item__list}>Gender: {gender}</li>
                            <li className={classes.item__list}>Birth year: {birth_year}</li>
                        </ul>
                    );
                }
            )}
        </div>
    );
};

export default PeopleIdInfo;

PeopleIdInfo.protoTypes = {
    personInfo: PropTypes.array,
    id: PropTypes.number,
}