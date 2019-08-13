import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";

import available from '../images/available.png';
import unavailable from '../images/unavailable.png';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const Washer = ({status}) => {
    const classes = useStyles();
    if(status === 1){
        return(
            <Paper className={classes.root}>
                <img src={available} alt="Washer" />
            </Paper>
        );
    }
    return(
        <Paper className={classes.root}>
            <img src={unavailable} alt="Washer" />
        </Paper>
    );
};

export default Washer;