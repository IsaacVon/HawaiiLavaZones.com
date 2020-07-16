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
    label: '$200k',
  },
  {
    value: 40,
    label: '$400k',
  },
  {
    value: 60,
    label: '$800k',
  },
  {
    value: 80,
    label: '$1.5M',
  },
  {
    value: 100,
    label: '$3M+',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        Price Point
      </Typography>
      <Slider
        defaultValue={60}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="off"
        min={20}
        max={100}
      />
    </div>
  );
}
