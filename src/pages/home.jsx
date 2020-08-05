import React from "react";
import Container from "@material-ui/core/Container";

function Home() {
  return (
    <Container
      maxWidth="sm"
      style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    >
      Welcome, This website designed to help people buying homes on the big island of Hawaii. Each area is designated a lava zone from one to nine. Lava Zones are very important and drasticly impact the safety and value of homes.
    </Container>
  );
}

export default Home;
