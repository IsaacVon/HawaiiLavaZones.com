import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  KmlLayer,
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

const useStyles = makeStyles((theme) => ({
  pos: {
    paddingBottom: 0,
  },
}));

export default function CompleteMap(props) {
  const classes = useStyles();

  // Set Map Zoom dependant on screen size
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const mapDefaultZoom = isSmallScreen ? 8.2 : 9;

  const inputMargin = isSmallScreen ? "auto" : "";
  const inputLeft = isSmallScreen ? 0 : 20;

  // Use pin from search for center if it is not null.
  const defaultCenter = { lat: 19.647822, lng: -155.53805 };
  const pinCenter = { lat: props.lat, lng: props.lng };
  const searchViewOffsetCenter = { lat: props.lat + 0.0, lng: props.lng };
  let center = props.lat ? pinCenter : defaultCenter;

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
    position: "absolute",
    textOverflow: `ellipses`,
    top: "20px",
    left: inputLeft,
    right: "0px",
    margin: inputMargin,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCGJr4hqm5LtdMCGQo7mCZvO-HEvKV54DM",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  // Correct Search
  if (props.lat) {
    return (
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={9.5}
          center={searchViewOffsetCenter}
          options={options}
        >
          <KmlLayer
            url="http://clivemogusu.tk/media/to-amsterdam-and-beyond.kml"
          />
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
  }

  // Invalid address
  else if (!props.addressValid) {
    return (
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={mapDefaultZoom}
          center={defaultCenter}
          options={options}
        >
          <InfoWindow position={defaultCenter}>
            <>
              <Typography color="primary" variant="h6">
                We cant find that address on this island.
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                className={classes.pos}
              >
                {props.searchAddress}
              </Typography>
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
  }

  // Before user searches
  else if (!props.lat) {
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
