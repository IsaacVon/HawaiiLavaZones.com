import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 20,
    label: 'TBD',
  },
  {
    value: 40,
    label: '12 mo.',
  },
  {
    value: 60,
    label: '6 mo.',
  },
  {
    value: 80,
    label: '3 mo.',
  },
  {
    value: 100,
    label: 'Now',
  },
];


export default function TimeSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align="center" color="textSecondary" id="discrete-slider-always">
        Time Frame
      </Typography>
      <Slider
        defaultValue={60}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="off"
        min={20}
        max={100}
        name="time"
        onChange={props.handleTimeDrag} 
      />
    </div>
  );
}
