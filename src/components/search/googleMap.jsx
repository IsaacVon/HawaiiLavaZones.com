import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  InfoWindow,
} from "@react-google-maps/api";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
};

const options = {
  disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false,
};

const inputFieldStyle = {
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `40px`,
  padding: `0 12px`,
  borderRadius: `5px`,
  boxShadow: `0 1px 3px rgba(0, 0, 0, 0.2)`,
  fontSize: `18px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: "absolute",
  top: "20px",
  left: "20px",
};

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxHeight: 300,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function App(props) {
  const classes = useStyles();
  // Use pin from search for center if it is not null.
  const defaultCenter = { lat: 19.647822, lng: -155.53805 };
  const pinCenter = { lat: props.lat, lng: props.lng };
  let center = props.lat ? pinCenter : defaultCenter;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCGJr4hqm5LtdMCGQo7mCZvO-HEvKV54DM",
    libraries,
    // ID IS NOT WORKING
    googleMapsClientId: "b22671634953788f",
  });


  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  if (props.lat) {
    return (
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={9.5}
          center={center}
          options={options}
        >

          <Marker
            position={{
              lat: props.lat,
              lng: props.lng,
            }}
          />
          <InfoWindow
            position={{
              lat: props.lat,
              lng: props.lng,
            }}
          >
            <>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Lava Zone {props.lavaZone}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {props.searchAddress}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {props.zoneInfoText}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </>
          </InfoWindow>
          <StandaloneSearchBox onPlacesChanged={props.onPlacesChanged}>
            <input
              type="text"
              id="addressSearch"
              placeholder="Search Address"
              name="searchAddress"
              style={inputFieldStyle}
            />
          </StandaloneSearchBox>
        </GoogleMap>
      </div>
    );
  } else if (!props.lat) {
    return (
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={9.5}
          center={center}
          options={options}
        >
          <StandaloneSearchBox onPlacesChanged={props.onPlacesChanged}>
            <input
              type="text"
              id="addressSearch"
              placeholder="Search Address"
              name="searchAddress"
              style={inputFieldStyle}
            />
          </StandaloneSearchBox>
        </GoogleMap>
      </div>
    );
  }
}
