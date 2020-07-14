import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Zone 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Summits and rift zones of Kilauea and Mauna Loa, where vents have
            been repeatedly active in historic time. Boundaries are defined by
            eruptive fissures, cinder cones, pit craters, and graben and caldera
            faults. Zone 1 is where lava flows originate.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Zone 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Areas adjacent to and downslope from Zone 1. Fifteen to twentyfive
            percent of Zone 2 has been covered by lava since 1800, and 25-75 has
            been covered within the last 750 years. The relative hazard within
            Zone 2 decreases gradually as one moves away from Zone 1.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Zone 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            One to five percent of Zone 3 has been covered since 1800, and 15-75
            oercent has been covered within the last 750 years. Areas
            gradationally less hazardous than Zone 2 because of greater distance
            from recently active vents and/or because the topography makes it
            less likely that flows will cover these areas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Zone 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Includes all of Hualalai. Moore and others eestimate that large
            eruptions reach the ocean about once every 300 years, a recurrence
            interval significantly lower than for either Kilauea or Mauna Loa.
            Lave coverage is proportionally smaller, about 5 percent since 1800,
            and less than 15 percent within the last 750 years.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Zone 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            An area on Kilauea currently protected from rift- or summitderived
            lava flows by north-facing fault scarps, south of Kilauea summit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Zone 6</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Two areas on Mauna Loa, both protected from rift- or summitderived
            lava flows. The area south of Mauna Loa summit is analogous to
            Kilauea's Zone 5. The northwest flank of Mauna Loa is also protected
            from eruptions originating on the summit or rift, but three
            eruptions have originated hight on this flank in the last two
            centuries. Thus we have included the northwest flank in Zone 3. The
            area near the south point of the island is protected from southwest
            rift zone eruptions by a completely faulted topography. The lava
            underlying this Zone 6 are all older than 4,000 years.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Zone 7</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The younger part of the dormant volcano Mauna Kea. Twenty percent of
            this area was covered by lave 3,500-5,000 years ago.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Zone 8</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The remaining part of Mauna Kea. Only a few percent of this area has
            been covered by lava in the last 10,000 years.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Zone 9</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Kohala Volcano, which last erupted over 60,000 years ago.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
