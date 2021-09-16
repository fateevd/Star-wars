import React from 'react';
import PropTypes from "prop-types";
import classes from "./ListPeople.module.scss";
import {useHistory} from "react-router-dom";


const ListPeople = ({pers, nextPage, presPage, currentPage, getUrl}) => {

    const route = useHistory();

    return (
        <div>

            <div className={classes.container}>
                {
                    pers.map(({name, id, img}) =>
                        <div onClick={() => route.push(`/people/${id}`)} key={id} className={classes.container__item}>
                            <img src={img} alt={name}/>
                            <p className={classes.container__text}>{name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};


ListPeople.propTypes = {
    pers: PropTypes.array,
    nextPage: PropTypes.string,
    presPage: PropTypes.string,
    currentPage: PropTypes.number,
    getUrl: PropTypes.func,
}

export default ListPeople;