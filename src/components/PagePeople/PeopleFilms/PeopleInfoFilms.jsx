import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {getFilms} from "../../../customFunction/getFilms";
import {renameUrl} from "../../../customFunction/renameUrl";


import classes from "./PeopleIdInfo.module.scss";

const PeopleInfoFilms = ({personInfoFilms}) => {

    const [filmsName, setFilmsName] = useState([]);

    useEffect(() => {
        (async () => {
            const nameFilms = personInfoFilms.map(url => renameUrl(url));
            const response = await getFilms(nameFilms);
            setFilmsName(response);
        })();

    }, []);


    return (
        <div className={classes.films}>
            {filmsName
                .sort((a, b) => a.episode_id - b.episode_id)
                .map(({title, episode_id}) => {
                    return (
                        <div className={classes.films__info} key={episode_id}>

                            <span className={classes.films__info_episode}>Episode {episode_id}</span>
                            <span>:</span>
                            <span className={classes.films__info_title}>{title}</span>

                        </div>
                    );
                })}
        </div>
    );
};

export default PeopleInfoFilms;

PeopleInfoFilms.propTypes = {
    personInfoFilms: PropTypes.array,
}