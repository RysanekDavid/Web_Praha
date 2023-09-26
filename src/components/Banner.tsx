import * as React from "react";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import bannerImage1 from "../images/Banner slide - 1.jpg";
import bannerImage2 from "../images/Banner slide - 2.jpg";
import bannerImage3 from "../images/Banner slide - 3.jpg";
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
  backgroundColor: "rgba(0, 0, 0, 0.50)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.88)",
  },
});

const BottomBar = styled("div")({
  display: "flex",
  position: "absolute",
  width: "100%",
  height: "20%",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.62)",
  borderBottomRightRadius: 14,
  borderBottomLeftRadius: 14,
});

type DotProps = {
  active: boolean;
};

const Dot = styled("div")<DotProps>(({ active }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: active ? "white" : "grey",
  marginRight: "10px",
  marginTop: "24px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "white",
  },
}));

export default function BoxSx() {
  //pole s obrázky
  const images = [bannerImage1, bannerImage2, bannerImage3, bannerImage5];

  const imageText = [
    "Soutěž Adapterra Awards",
    "Využijte biopelnici zdarma ",
    "Štvanická lávka nominována na titul Stavba roku 2023  ",
    "Balíček pomoci Pražanům ",
  ];

  const imageSubText = [
    "Online hlasování veřejnosti o Cenu sympatie",
    "Pomůžete snížit množství směsného odpadu",
    "V soutěži rozhoduje odborná porota a opět může hlasovat i veřejnost",
    "Soubor opatření pro pražské domácnosti ohrožené inflací",
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Přepne obrázek každé 3 sekundy

  React.useEffect(() => {
    const timer = setInterval(nextImage, 10000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

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
        border: 10,
        borderColor: "white",
        overflow: "hidden",
        position: "absolute",
        borderRadius: 3,
        marginLeft: "18%",
        top: "14%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 800,
        maxWidth: "70%",
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

      <BottomBar>
        <div
          style={{
            flex: 1,
            paddingBottom: "2px",
            paddingLeft: "10px",
            color: "white",
            alignContent: "left",
            alignItems: "left",
            justifyContent: "left",
            display: "flex",
          }}
        >
          {
            <div style={{ marginTop: "4px" }}>
              <div
                style={{
                  marginBottom: "5px",
                  color: "white",
                }}
              >
                {imageText[currentImageIndex]}
              </div>
              {imageSubText[currentImageIndex]}
            </div>
          }
        </div>
        <div style={{ display: "flex", paddingRight: "10px" }}>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={currentImageIndex === index}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </BottomBar>
    </Box>
  );
}
