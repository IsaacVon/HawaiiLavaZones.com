import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 30,

    "& > *": {},
  },
}));

export default function ContactText() {
  const classes = useStyles();

  return (
    <div className="contactText">
      If you have any questions regarding lava zones or real estate, please
      leave your questions and contact information. We will reach out to you as
      soon as possible.
    </div>
  );
}
