import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const divStyle = {
  margin: '40px',
 

  display: 'flex',
  justifyContent: 'center',
};

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography  style={divStyle} variant="h5" component="h3">
        Which stock repersents the ticker AAPL?

        </Typography>
       
      </Paper>
    </div>
  );
}
