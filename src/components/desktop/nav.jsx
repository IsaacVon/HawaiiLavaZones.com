import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import navBug from "../../assets/bug.png";
import { device } from "../../utils/device";

const ButtonContainer = styled.section`
  margin: 5px;
  /* background-color: #f89143; */
  border-radius: 40px;

  &:hover {
    transition: background-color 0.2s ease-in-out;
    background-color: #f89143;
    /* color: #1deff4; */
  }

  @media ${device.mobileS} {
  }
  
  @media ${device.tablet} {
    padding: 3px 20px;
  }
`;

const NavBackground = styled.section`
  background-color: #f4b950;
  display: grid;
  place-items: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
`;

const NavButtonContainer = styled.section`
  /* background-color: purple; */
  display: flex;
  max-width: 800px;
`;

export default function Nav(props) {
  return (
    <NavBackground>
      <NavButtonContainer>
        <ButtonContainer>
            <Button
              className="navButton"
              disableTouchRipple
              component={Link}
              to="/"
            >
              <img className="navBug" src={navBug} alt="HawaiiLavaZones" />
            </Button>
        </ButtonContainer>

        <ButtonContainer>
          <Button
            className="navButton"
            disableTouchRipple
            component={Link}
            to="/Search"
          >
            <p className="navButtonText">Search</p>
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            className="navButton"
            disableTouchRipple
            component={Link}
            to="/ZoneInformation"
          >
            <p className="navButtonText">Learn</p>
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            className="navButton"
            disableTouchRipple
            component={Link}
            to="/Contact"
          >
            <p className="navButtonText">Contact</p>
          </Button>
        </ButtonContainer>
      </NavButtonContainer>
    </NavBackground>
  );
}
