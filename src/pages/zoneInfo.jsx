import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class ZoneInformation extends Component {
  componentDidMount() {
    console.log("lava zone mounted");
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems, {});
    });
  }

  render() {
    return (
      
      <div className="container">    
      <ul className="collapsible">
        <li>
          <div className="collapsible-header #ff7043 deep-orange lighten-1">
            <i className="material-icons">local_fire_department</i>Zone 1
          </div>
          <div className="collapsible-body #ffccbc deep-orange lighten-5">
            <span>
              Summits and rift zones of Kilauea and Mauna Loa, where vents have
              been repeatedly active in historic time. Boundaries are defined by
              eruptive fissures, cinder cones, pit craters, and graben and
              caldera faults. Zone 1 is where lava flows originate.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header #ffca28 amber lighten-">
            <i className="material-icons">local_fire_department</i>Zone 2
          </div>
          <div className="collapsible-body #ffecb3 amber lighten-5">
            <span>
              Areas adjacent to and downslope from Zone 1. Fifteen to twentyfive
              percent of Zone 2 has been covered by lava since 1800, and 25-75
              has been covered within the last 750 years. The relative hazard
              within Zone 2 decreases gradually as one moves away from Zone 1.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header #ffecb3 amber lighten-5">
            <i className="material-icons">filter_drama</i>Zone 3
          </div>
          <div className="collapsible-body">
            <span>
              One to five percent of Zone 3 has been covered since 1800, and
              15-75 oercent has been covered within the last 750 years. Areas
              gradationally less hazardous than Zone 2 because of greater
              distance from recently active vents and/or because the topography
              makes it less likely that flows will cover these areas.{" "}
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header #fff8e1 #f1f8e9 light-green lighten-5">
            <i className="material-icons">filter_drama</i>Zone 4
          </div>
          <div className="collapsible-body">
            <span>
              Includes all of Hualalai. Moore and others eestimate that large
              eruptions reach the ocean about once every 300 years, a recurrence
              interval significantly lower than for either Kilauea or Mauna Loa.
              Lave coverage is proportionally smaller, about 5 percent since
              1800, and less than 15 percent within the last 750 years
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header #f1f8e9 light-green lighten-4">
            <i className="material-icons">wb_sunny</i>Zone 5
          </div>
          <div className="collapsible-body #f1f8e9 light-green lighten-5">
            <span>
              An area on Kilauea currently protected from rift- or summitderived
              lava flows by north-facing fault scarps, south of Kilauea summit.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header #f1f8e9 light-green lighten-3">
            <i className="material-icons">wb_sunny</i>Zone 6
          </div>
          <div className="collapsible-body #f1f8e9 light-green lighten-5">
            <span>
              Two areas on Mauna Loa, both protected from rift- or summitderived
              lava flows. The area south of Mauna Loa summit is analogous to
              Kilauea's Zone 5. The northwest flank of Mauna Loa is also
              protected from eruptions originating on the summit or rift, but
              three eruptions have originated hight on this flank in the last
              two centuries. Thus we have included the northwest flank in Zone
              3. The area near the south point of the island is protected from
              southwest rift zone eruptions by a completely faulted topography.
              The lava underlying this Zone 6 are all older than 4,000 years.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header #f1f8e9 light-green lighten-2">
            <i className="material-icons">beach_access</i>Zone 7
          </div>
          <div className="collapsible-body #f1f8e9 light-green lighten-5">
            <span>
              The younger part of the dormant volcano Mauna Kea. Twenty percent
              of this area was covered by lave 3,500-5,000 years ago.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header #f1f8e9 light-green lighten-2">
            <i className="material-icons">beach_access</i>Zone 8
          </div>
          <div className="collapsible-body #f1f8e9 light-green lighten-5">
            <span>
              The remaining part of Mauna Kea. Only a few percent of this area
              has been covered by lava in the last 10,000 years.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header #f1f8e9 light-green lighten-2">
            <i className="material-icons">beach_access</i>Zone 9
          </div>
          <div className="collapsible-body #f1f8e9 light-green lighten-5">
            <span>
              Kohala Volcano, which last erupted over 60,000 years ago.
            </span>
          </div>
        </li>
      </ul>
      </div>
    );
  }
}

export default ZoneInformation;
