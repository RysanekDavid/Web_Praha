import * as React from "react";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import bannerImage1 from "../images/Banner slide - 1.jpg";
import bannerImage2 from "../images/Banner slide - 2.jpg";
import bannerImage3 from "../images/Banner slide - 3.jpg";
import bannerImage4 from "../images/Banner slide - 4.jpg";
import bannerImage5 from "../images/Banner slide - 5.jpg";

const OuterWrapperBack = styled("div")({
  display: "flex",
  paddingLeft: "px",
  position: "absolute",
  left: "10px",
  color: "white",
});

const OuterWrapperForward = styled("div")({
  display: "flex",
  paddingRight: "0px",
  position: "absolute",
  right: "10px",
  color: "white",
});

const IconWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  width: "34px",
  height: "34px",
  transition: "background-color 0.4s ease",
  cursor: "pointer",
  backgroundColor: "rgba(0, 0, 0, 0.42)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.88)",
  },
});

const BottomBar = styled("div")({
  display: "flex",
  position: "absolute",
  width: "200px",
  height: "10px",
  bottom: "0",
  backgroundColor: "black",
});

export default function BoxSx() {
  //pole s obrázky
  const images = [
    bannerImage1,
    bannerImage2,
    bannerImage3,
    bannerImage4,
    bannerImage5,
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  //funkce přesunutí na další obrázek
  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const previousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(images.length - 1);
    }
  };

  return (
    <Box
      sx={{
        border: 12,
        borderColor: "white",
        overflow: "hidden",
        position: "relative",
        borderRadius: 3,
        marginLeft: "18%",
        marginTop: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 800,
        maxWidth: "50%",
        height: 285,
        backgroundColor: "white",
        "&:hover": {},
      }}
    >
      <OuterWrapperBack>
        <IconWrapper onClick={previousImage}>
          <ArrowBackIosNewIcon sx={{}} />
        </IconWrapper>
      </OuterWrapperBack>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1 }}
      >
        <Grid item>
          <img
            src={images[currentImageIndex]}
            alt="Failed to load image from server"
            style={{
              width: "100%",
              borderRadius: 14,
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          />
        </Grid>
      </Grid>

      <OuterWrapperForward>
        <IconWrapper onClick={nextImage}>
          <ArrowForwardIosIcon sx={{}} />
        </IconWrapper>
      </OuterWrapperForward>
    </Box>
  );
}
