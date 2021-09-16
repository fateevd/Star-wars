import React, {useEffect, useState} from 'react';
import {defauldNewtwork} from "../../select/selectNetwork";
import { getPeopleId} from "../../customFunction/getID";
import {selectPeople} from "../../select/constApi";
import ListPeople from "../../components/PagePeople/ListPeople";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import {useParseUrl} from "../../hooks/useParseUrl";
import {renameUrl} from "../../customFunction/renameUrl";
import {currentPage} from "../../customFunction/currentPage";
import {getIdImg} from "../../customFunction/getImg";
import PeopleButton from "../../components/PagePeople/PeopleButton/PeopleButton";

const People = () => {

    const [pers, setPers] = useState('');
    const [errorApi, setErrorApi] = useState(false);
    const [nextPage , setNexPage] = useState(null);
    const [presPage , setPresPage] = useState(null);
    const [current, setCurrent] = useState(1);
    const queryUrl = useParseUrl();
    const queryPage = queryUrl.get('page');


    const getUrl = async url => {
        const resultGetUrl = await defauldNewtwork(url);
        if (resultGetUrl) {
            const mapResult = resultGetUrl.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getIdImg(id);
                return {
                    id,
                    name,
                    img,
                }
            })
            setNexPage(renameUrl(resultGetUrl.next));
            setPresPage(renameUrl(resultGetUrl.previous));
            setCurrent(currentPage(url));
            setPers(mapResult);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }

    }


    useEffect(() => {
        getUrl(selectPeople + queryPage);
    }, [])

    return (
        <div>
            <h2 className="header__title">Personal</h2>
            <PeopleButton getUrl={getUrl} nextPage={nextPage} presPage={presPage} current={current}/>
            {
                !errorApi
                    ?
                    (pers.length
                            ? <ListPeople getUrl={getUrl} nextPage={nextPage} currentPage={current}  presPage={presPage} pers={pers}/>
                            : <Loading/>
                    )
                    : <Error/>
            }

        </div>
    );
};

export default People;