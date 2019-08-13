import React from 'react';
import {makeStyles} from "@material-ui/core";

import available from '../images/available.png';
import unavailable from '../images/unavailable.png';
import base from '../images/base.png';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0.5, 2),
    },
}));

const Washer = ({status}) => {
    const classes = useStyles();
    if(status === 1){
        return(
            <div className={classes.root}>
                <img src={available} alt="Washer" />
            </div>
        );
    } else if(status === -1){
        return(
            <div className={classes.root}>
                <img src={base} alt="Washer" />
            </div>
        );
    }
    return(
        <div className={classes.root}>
            <img src={unavailable} alt="Washer" />
        </div>
    );
};

export default Washer;
