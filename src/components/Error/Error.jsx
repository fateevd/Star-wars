import React from 'react';
import classes from "./Error.module.scss";

const Error = () => {
    return (
        <div className={classes.error}>
            Если вы видете этот текст, <br/>
            то у вас произошла ошибка : )
        </div>
    );
};

export default Error;