import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Error from "../components/Error/Error";
import Start from "../page/Start/Start";
import PeopleId from "../page/PeopleID/PeopleID";
import People from "../page/People/People";
import NotFoundPage from "../page/NotFooundPage/NotFoundPage";
import Favorite from "../page/Favorite/Favorite";
import Search from "../page/Search/Search";


const AppRoute = () => {
    return (

        <Switch>
            <Route path='/start'>
                <Start/>
            </Route>
            <Route exact path='/people'>
                <People/>
            </Route>
            <Route exact path='/people/:id'>
                <PeopleId/>
            </Route>
            <Route exact path='/search'>
                <Search />
            </Route>
            <Route exact path='/favorite'>
                <Favorite />
            </Route>
            <Route path='*'>
               <NotFoundPage/>
            </Route>
            <Route path='/error'>
                <Error/>
            </Route>

            <Redirect to="/error"/>
        </Switch>

    );
};

export default AppRoute;