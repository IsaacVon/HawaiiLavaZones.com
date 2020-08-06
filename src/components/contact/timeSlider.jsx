import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

const marks = [
  {
    value: 20,
    label: "TBD",
  },
  {
    value: 40,
    label: "12 mo.",
  },
  {
    value: 60,
    label: "6 mo.",
  },
  {
    value: 80,
    label: "3 mo.",
  },
  {
    value: 100,
    label: "Now",
  },
];

export default function TimeSlider(props) {
  return (
    <Grid container justify="center" spacing={0}>
      <Grid item xs={12}>
        <Typography
          align="center"
          color="textSecondary"
          id="discrete-slider-always"
        >
          Time Frame
        </Typography>
      </Grid>
      <Grid item xs={10} md={11}>
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
      </Grid>
    </Grid>
  );
}
