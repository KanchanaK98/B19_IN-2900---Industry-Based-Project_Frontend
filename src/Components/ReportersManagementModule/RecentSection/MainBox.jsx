import React from "react";
import { keyframes } from "@emotion/react";
import { Card, Typography } from "@mui/material";

import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const kenburnsTopLeft = keyframes` 0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 16%;
            transform-origin: 16% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(-20px, -15px);
            transform: scale(1.25) translate(-20px, -15px);
    -webkit-transform-origin: top left;
            transform-origin: top left;
  }
}
@keyframes kenburns-top-left {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 16%;
            transform-origin: 16% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(-20px, -15px);
            transform: scale(1.25) translate(-20px, -15px);
    -webkit-transform-origin: top left;
            transform-origin: top left;
  }
`;
const quotes = ["VISSION", "MISSION", "AIMS"];
function MainBox() {
  return (
    <Card
      sx={{
        width: 580,
        height: 380,
        animation: `${kenburnsTopLeft} 1s ease-out both`,
        padding: 5,
        mt:3.5
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", textAlign: "center", color: "#290f91" }}
      >
        Welcome to DirectFN Pvt(Ltd)
        
      </Typography>
      <Carousel
            plugins={[
              "infinite",
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 2000,
                },
              },
            ]}
            animationSpeed={1000}
          >
      {
          quotes.map((quote)=>(
              <Typography key={quote}>{quote}</Typography>
          ))
      }
      </Carousel>
    </Card>
  );
}

export default MainBox;
