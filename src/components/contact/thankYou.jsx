import React from "react";
import styled from "styled-components";


const Title = styled.h1`
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 2em;
`;

const Information = styled.h2`
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 1.2em;
`;

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  padding: 0px 25px;
  height: calc(100vh - var(--navbarHeight));
`;

export default function ThankYou(props) {
  const name = props.name.split(" ");
  const firstname = name[0];

  return (
    <Wrapper>
      <div>
        <Title>Thank you {firstname}</Title>

        <Information>
          A real estate expert from our team will reach out to you shortly. We
          look forward to helping you!
        </Information>
      </div>
    </Wrapper>
  );
}
