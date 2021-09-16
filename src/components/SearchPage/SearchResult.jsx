import React from 'react';
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import classes from "./SearchResult.module.scss";


const SearchResult = ({response}) => {
    const route = useHistory();
    return (
        <div className={classes.container}>
            {response.map(({id,name,img}) =>
                <div key={id} className={classes.container__item} onClick={() => route.push(`/people/${id}`)}>
                    <div className={classes.container__item_title}>{name}</div>
                    <img className={classes.container__item_img} src={img} alt={name}/>
                </div>
            )}
        </div>

    );
};

export default SearchResult;

SearchResult.propTypes = {
    response: PropTypes.array,
}