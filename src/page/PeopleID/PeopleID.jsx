import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {defauldNewtwork} from "../../select/selectNetwork";
import {personUrl} from "../../select/constApi";
import {useParams} from "react-router-dom";
import PeopleInfoFilms from "../../components/PagePeople/PeopleFilms/PeopleInfoFilms";
import PeopleIdInfo from "../../components/PagePeople/PeopleFilms/PeopleIdInfo";
import {getIdImg} from "../../customFunction/getImg";
import classes from "./PeopleId.module.scss";
import UiGoBack from "../../Ui-Kit/UiGoBack/UiGoBack";
import PeopleImg from "../../components/PagePeople/PeopleFilms/PeopleImg/PeopleImg";
import {useSelector} from "react-redux";


const PeopleId = ({...props}) => {


    const [personInfo, setPersonInfo] = useState(['']);
    const [personName, setPersonName] = useState('');
    const [personInfoFilms, setPersonInfoFilms] = useState('');
    const [personFavorite, setPersonToFavorite] = useState(false);
    const paramsId = useParams();
    const img = getIdImg(paramsId.id);
    const selectStore = useSelector(state => state.favoriteReducer);
    useEffect(() => {

        (async () => {
            const res = await defauldNewtwork(`${personUrl}/${paramsId.id}`);

            selectStore[paramsId.id] ? setPersonToFavorite(true) : setPersonToFavorite(false);

            if (res) {
                setPersonName(res.name);
                setPersonInfo([res]);
                res.films && setPersonInfoFilms(res.films);
            } else {
                alert("Ошибка 404");
            }
        })();
    }, [])


    return (
        <div className={classes.people}>
            <UiGoBack/>
            <span className={classes.people__title}>{personName}</span>
            <div className={classes.people_info}>
                <PeopleImg personFavorite={personFavorite} setPersonToFavorite={setPersonToFavorite} id={paramsId.id} img={img} personName={personName}/>
                <PeopleIdInfo personInfo={personInfo} id={paramsId}/>
                {
                    personInfoFilms && <PeopleInfoFilms personInfoFilms={personInfoFilms}/>
                }
            </div>
        </div>
    );
};

export default PeopleId;

PeopleId.protoTypes = {
    props: PropTypes.array,
}

