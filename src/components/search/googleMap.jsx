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
import Link from "@material-ui/core/Link";
import { useMediaQuery } from "@material-ui/core";


const libraries = ["places"];
const mapContainerStyle = {
  height: "85vh",
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
  pos: {
    marginBottom: 5,
  },
}));



export default function App(props) {
  const classes = useStyles();


  // Set Map Zoom dependant on screen size
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const mapDefaultZoom = isSmallScreen ? 8.2 : 9;
  
  // Use pin from search for center if it is not null.
  const defaultCenter = { lat: 19.647822, lng: -155.53805 };
  const pinCenter = { lat: props.lat, lng: props.lng };
  const searchViewOffsetCenter = { lat: props.lat + 0.0, lng: props.lng };
  let center = props.lat ? pinCenter : defaultCenter;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCGJr4hqm5LtdMCGQo7mCZvO-HEvKV54DM",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  if (props.lat) {
    return (
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={9.5}
          center={searchViewOffsetCenter}
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
              <Typography color="primary" variant="h6">
                Lava Zone {props.lavaZone}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                className={classes.pos}
              >
                {props.searchAddress}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                className={classes.pos}
              ></Typography>
              <Link href="/ZoneInformation" variant="body2" color="primary">
                Learn More
              </Link>
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
          zoom={mapDefaultZoom}
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
