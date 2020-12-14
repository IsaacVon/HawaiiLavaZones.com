import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: blue;
`;

const Information = styled.h2`
  text-align: center;
  color: green;
`;

const Wrapper = styled.section`
  display: grid;
  place-items: center;
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
