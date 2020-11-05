import React, { Component } from "react";
import map from "../../assets/mapLarge.png";
import zone1 from "../../assets/zoneNumbers/zone1.png";
import zone2 from "../../assets/zoneNumbers/zone2.png";
import zone3 from "../../assets/zoneNumbers/zone3.png";
import zone4 from "../../assets/zoneNumbers/zone4.png";
import zone5 from "../../assets/zoneNumbers/zone5.png";
import zone6 from "../../assets/zoneNumbers/zone6.png";
import zone7 from "../../assets/zoneNumbers/zone7.png";
import zone8 from "../../assets/zoneNumbers/zone8.png";
import zone9 from "../../assets/zoneNumbers/zone9.png";

class ZoneInfo extends Component {
  state = {};
  render() {
    return (
      <div className="infoDesktopWrapper">
        <div className="infoDesktopColumn">
          <img className="desktopMap" src={map} alt="map" />
          <div className="zoneNumberContainer">
            <img className="zoneNumber" src={zone1} alt="map" />
            <div className="zoneText">
              {" "}
              Zone 1 contains summits and rift zones of Kilauea and Mauna Loa,
              where vents have been repeatedly active historically. Boundaries
              are defined by eruptive fissures, cinder cones, pit craters, and
              graben and caldera faults. Zone 1 is where lava flows originate.
            </div>
          </div>

          <div className="zoneNumberContainer">
            <img className="zoneNumber" src={zone2} alt="map" />
            <div className="zoneText">
              {" "}
              Zone 2 contains areas adjacent to and downslope from Zone 1. It is
              estimated that 15-25% percent of Zone 2 has been covered by lava
              since 1800, and 25-75% has been covered within the last 750 years.
              The relative hazard within Zone 2 decreases as one moves away from
              Zone 1.
            </div>
          </div>

          <div className="zoneNumberContainer">
            <img className="zoneNumber" src={zone3} alt="map" />
            <div className="zoneText">
              {" "}
              One to five percent of Zone 3 has been covered since 1800, and
              15-75 percent has been covered within the last 750 years. Areas
              gradationally less hazardous than Zone 2 because of greater
              distance from recently active vents or because the topography
              makes it less likely that flows will cover these areas.
            </div>
          </div>

          <div className="zoneNumberContainer">
            <img className="zoneNumber" src={zone4} alt="map" />
            <div className="zoneText">
              {" "}
              Zone 4 includes all of Hualalai. Moore and others estimate that
              large eruptions reach the ocean about once every 300 years, a
              recurrence interval significantly lower than for either Kilauea or
              Mauna Loa. Lave coverage is proportionally smaller, about 5
              percent since 1800, and less than 15 percent within the last 750
              years.
            </div>
          </div>

          <div className="zoneNumberContainer">
            <img className="zoneNumber" src={zone5} alt="map" />
            <div className="zoneText">
              {" "}
              An area on Kilauea currently protected from rift- or summit
              derived lava flows by north-facing fault scarps, south of the
              Kilauea summit.
            </div>
          </div>

          <div className="zoneNumberContainer">
            <img className="zoneNumber" src={zone6} alt="map" />
            <div className="zoneText">
              {" "}
              Two areas on Mauna Loa, both protected from rift- or summit
              derived lava flows. The area south of the Mauna Loa summit is
              analogous to Kilauea's. The northwest flank of Mauna Loa is also
              protected from eruptions originating on the summit or rift. Three
              eruptions have originated hight on this flank in the last two
              centuries. Thus we have included the northwest flank in Zone 3.
              The area near the southernmost point of the island is protected
              from southwest rift zone eruptions by an entirely faulted
              topography. The lava underlying this Zone 6 are all older than
              4,000 years.
            </div>
          </div>

          <div className="zoneNumberContainer">
            <img className="zoneNumber" src={zone7} alt="map" />
            <div className="zoneText">
              {" "}
              Zone 7 is affected by the younger part of the dormant volcano
              Mauna Kea. Twenty percent of this area was covered by lave
              3,500-5,000 years ago.
            </div>
          </div>

          <div className="zoneNumberContainer">
            <img className="zoneNumber" src={zone8} alt="map" />
            <div className="zoneText">
              {" "}
              Zone 8 is affected by the remaining part of Mauna Kea. Only a few
              percent of this area has been covered by lava in the last 10,000
              years.
            </div>
          </div>

          <div className="zoneNumberContainer">
            <img className="zoneNumber" src={zone9} alt="map" />
            <div className="zoneText">
              {" "}
              Zone 9 is the least likely to be affected by lava. Kohala Volcano,
              which last erupted over 60,000 years ago.
            </div>
          </div>
        </div>
        <div className="infoDesktopColumn">
          <div className="desktopInfoContainer">
            <p className="desktopInfoTitle">What the Map Shows</p>
            <p className="desktopInfoBody">
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
            </p>
          </div>

          <div className="desktopInfoContainer">
            <p className="desktopInfoTitle">
              The Boundaries between zones are not distinct
            </p>
            <p className="desktopInfoBody">
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
            </p>
          </div>

          <div className="desktopInfoContainer">
            <p className="desktopInfoTitle">Why Lava Zones Matter</p>
            <p className="desktopInfoBody">
              Many insurance companies will not offer home insurance on Zones 1
              and 2. Home insurance limits are also capped at $350,000 on zones
              1 and 2. Mortgages typically require a higher down payment. It is
              not reccomended that you buy in zones 1 or 2. There is a large
              difference in Zone 3 and 2. Zone 3 has much more development. The
              safer the Lava Zone, the more competitive your insurance costs
              will be.
            </p>
          </div>

          <div className="desktopInfoContainer">
            <p className="desktopInfoTitle">Who Created the Lava Zones</p>
            <p className="desktopInfoBody">
              The first maps showing volcanic hazard zones on Hawai'i Island
              were prepared in 1974 by U.S. Geological Survey geologists and
              were published in USGS Open-File Report 74-239. The lava-flow
              hazards map was reformatted in the 1980s, based on new and more
              complete geologic mapping and lava flow age-dating by USGS
              scientists. In 1992, the "Map Showing Lava-Flow Hazard Zones,
              Island of Hawai‘i" was slightly revised and published as USGS
              Miscellaneous Field Studies Map 2193.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ZoneInfo;
