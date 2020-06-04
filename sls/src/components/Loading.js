import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

const size = 80;

const useStyles = makeStyles({
  loading: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    margin: `-${size / 2}px 0px 0px -${size / 2}px`
  }
});

export const Loading = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Loader
      className={classes.loading}
      type="Circles"
      color={theme.palette.primary.main}
      height={size}
      width={size}
    />
  );
};
