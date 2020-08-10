import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%", // needs to be adjusted
    flexWrap: "wrap",
    paddingTop: 35,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function GeneralZoneInfo() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Box height="40px" textAlign="center">
          <Typography color="primary">General</Typography>
        </Box>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Why Lava Zones Matter
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Many insurance companies will not offer home insurance on Zones 1
              and 2. Home insurance limits are also capped at $350,000 on zones
              1 and 2. Mortgages typically require a higher down payment. It is
              not reccomended that you buy in zones 1 or 2. There is a large
              difference in Zone 3 and 2. Zone 3 has much more development. The
              safer the Lava Zone, the more competitive your insurance costs
              will be.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Who Created the Lava Zones
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The first maps showing volcanic hazard zones on Hawai'i Island
              were prepared in 1974 by U.S. Geological Survey geologists and
              were published in USGS Open-File Report 74-239. The lava-flow
              hazards map was reformatted in the 1980s, based on new and more
              complete geologic mapping and lava flow age-dating by USGS
              scientists. In 1992, the "Map Showing Lava-Flow Hazard Zones,
              Island of Hawai‘i" was slightly revised and published as USGS
              Miscellaneous Field Studies Map 2193.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              What the Lava Zone Map shows
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nine lava-flow hazard zones for the volcanoes on Hawai‘i Island
              (Kīlauea, Mauna Loa, Mauna Kea, Hualālai, and Kohala) are shown on
              the map. The zones, ranked from 1 through 9, represent a scale of
              decreasing hazard as the numbers increase, based on the
              probability of coverage by lava flows. The land area classified
              under Zone 1, the most hazardous, includes volcanic vents in the
              summits and rift zones of Kīlauea and Mauna Loa, Hawai‘i's two
              most active volcanoes. Zone 9, considered the least hazardous
              region, consists of Kohala, a volcano that has not erupted for
              60,000 years.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Lava Zone Map</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>INSERT IMAGE HERE</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              The boundaries between zones are not distinct
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The hazard zone boundaries are approximate and gradational. The
              degree of hazard from one zone to the next is gradual rather than
              abrupt, and the change can occur over the distance of a mile or
              more. In other words, the boundary between lava-flow hazard zones
              is not a sharp line that, in one step, you can cross from one zone
              into the next. Also, within a single hazard zone, the severity of
              hazard from one location to the next can vary on a scale too fine
              to map. For example, the hazards posed by lava flows decreases
              gradually as the distance from eruptive vents increases. Due to
              local topography, however, there can be abrupt changes in the
              relative lava-flow hazard within a single zone. For example, the
              hills behind Ninole stand high above the adjacent slopes of Mauna
              Loa and, consequently, are at a much lower risk from lava flows
              than the surrounding area.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
