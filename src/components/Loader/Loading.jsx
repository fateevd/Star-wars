import React from 'react';
import "./Loading.scss";

const Loading = () => {
    return (
        <div className="loading">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p className="loading__text">Loading...</p>
        </div>

    );
};

export default Loading;


