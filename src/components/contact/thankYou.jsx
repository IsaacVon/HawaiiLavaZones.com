import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: 30,
    flexGrow: 1,
    
  },
  media: {
    height: 200,
  },
}));

export default function ThankYou(props) {

  const classes = useStyles();
  const name = props.name.split(" ");
  const firstname = name[0];

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={11}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="./skyWithTree.jpg"
                title="Hawaii Sky With Tree"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Thank you {firstname}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A real estate expert from our team will reach out to you
                  shortly. We look forward to helping you!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
