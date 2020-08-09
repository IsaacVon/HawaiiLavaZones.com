import React, { Component } from "react";

class ZoneInformationCard extends Component {
  
  zoneTextGenerator = (lavaZone) => {
    lavaZone = lavaZone - 1;
    const arrayOfZoneText = [
      `Zone 1 contains summits and rift zones of Kilauea and Mauna Loa,
      where vents have been repeatedly active historically. Boundaries are
      defined by eruptive fissures, cinder cones, pit craters, and graben
      and caldera faults. Zone 1 is where lava flows originate.`,
      ` Zone 2 contains areas adjacent to and downslope from Zone 1. It is
      estimated that 15-25% percent of Zone 2 has been covered by lava
      since 1800, and 25-75% has been covered within the last 750 years.
      The relative hazard within Zone 2 decreases as one moves away from
      Zone 1.`,
      `One to five percent of Zone 3 has been covered since 1800, and 15-75
      percent has been covered within the last 750 years. Areas
      gradationally less hazardous than Zone 2 because of greater distance
      from recently active vents or because the topography makes it less
      likely that flows will cover these areas.`,
      ` Zone 4 includes all of Hualalai. Moore and others estimate that
      large eruptions reach the ocean about once every 300 years, a
      recurrence interval significantly lower than for either Kilauea or
      Mauna Loa. Lave coverage is proportionally smaller, about 5 percent
      since 1800, and less than 15 percent within the last 750 years.`,
      `An area on Kilauea currently protected from rift- or summit derived
      lava flows by north-facing fault scarps, south of the Kilauea
      summit.`,
      `Two areas on Mauna Loa, both protected from rift- or summit derived
      lava flows. The area south of the Mauna Loa summit is analogous to
      Kilauea's. The northwest flank of Mauna Loa is also protected from
      eruptions originating on the summit or rift. Three eruptions have
      originated hight on this flank in the last two centuries. Thus we
      have included the northwest flank in Zone 3. The area near the
      southernmost point of the island is protected from southwest rift
      zone eruptions by an entirely faulted topography. The lava
      underlying this Zone 6 are all older than 4,000 years.`,
      `Zone 7 is affected by the younger part of the dormant volcano Mauna
      Kea. Twenty percent of this area was covered by lave 3,500-5,000
      years ago.`,
      `Zone 8 is affected by the remaining part of Mauna Kea. Only a few
      percent of this area has been covered by lava in the last 10,000
      years.`,
      `    Zone 9 is the least likely to be affected by lava. Kohala Volcano,
      which last erupted over 60,000 years ago.`,
    ];
    console.log("zoneTextGenerator: ", arrayOfZoneText[lavaZone]);
    return arrayOfZoneText[lavaZone];
  };

  render() {
    const { searchAddress, lavaZone } = this.props;

    let zoneInfoText = this.zoneTextGenerator(lavaZone);

    return (
      <h1>
        Lava Zone {lavaZone} ding dong {zoneInfoText}
      </h1>
    );
  }
}

export default ZoneInformationCard;
