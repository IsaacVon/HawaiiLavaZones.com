import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

const marks = [
  {
    value: 20,
    label: "$200k",
  },
  {
    value: 40,
    label: "$400k",
  },
  {
    value: 60,
    label: "$800k",
  },
  {
    value: 80,
    label: "$1.5M",
  },
  {
    value: 100,
    label: "$3M+",
  },
];

export default function PriceSlider(props) {
  return (
    <Grid container justify="center" spacing={0}>
      <Grid item xs={12}>
        <Typography
          align="center"
          color="textSecondary"
          id="discrete-slider-always"
        >
          Price Point
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Slider
          id="priceSlider"
          defaultValue={60}
          aria-labelledby="discrete-slider-always"
          step={10}
          marks={marks}
          valueLabelDisplay="off"
          min={20}
          max={100}
          name="price"
          onChange={props.handlePriceDrag}
          // use onChangeCommitted after
        />
      </Grid>
    </Grid>
  );
}
