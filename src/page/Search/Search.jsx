import React, {useEffect, useState} from 'react';
import {defauldNewtwork} from "../../select/selectNetwork";
import {searchPeople} from "../../select/constApi";
import {getPeopleId} from "../../customFunction/getID";
import {getIdImg} from "../../customFunction/getImg";
import SearchResult from "../../components/SearchPage/SearchResult";
import UiSearchInput from "../../Ui-Kit/UiSearchInput/UiSearchInput";
import classes from "./Search.module.scss";

const Search = () => {


    const [responseSearch, setResponseSearch] = useState([]);
    const [inputSearch, setInputSearch] = useState('');


    const getResponse = async param => {
        const res = await defauldNewtwork(`${searchPeople}+${param}`);

        const people = res.results.map(({name, url}) => {
            const id = getPeopleId(url);
            const img = getIdImg(id);
            return {
                id,
                img,
                name,
            }
        });

        setResponseSearch(people);
    }
    const handleSearch = event => {
        setInputSearch(event);
        getResponse(event);
    }
    useEffect(() => {
        getResponse('');
    }, [])

    return (
        <div className='search'>
            <h2 className="header__title">Search</h2>
            <UiSearchInput setResponseSearch={setResponseSearch} value={inputSearch} handleSearch={handleSearch}
                           placeholder={"i'm search's, star wars"}/>
            {responseSearch.length
                ? <SearchResult response={responseSearch}/>
                : <h1 className={classes.results}>No, results</h1>
            }
        </div>
    );
};

export default Search;