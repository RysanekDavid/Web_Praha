import * as React from "react";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

const OuterWrapperBack = styled("div")({
  display: "inline-flex",
  paddingLeft: "12px", // Posun vlevo pro levou ikonu
});

const OuterWrapperForward = styled("div")({
  display: "inline-flex",
  paddingRight: "12px", // Posun vpravo pro pravou ikonu
});

const IconWrapper = styled("div")({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  width: "34px",
  height: "34px",
  transition: "background-color 0.4s ease",
  cursor: "pointer",
  backgroundColor: "rgba(0, 0, 0, 0.03)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.20)",
  },
});
export default function BoxSx() {
  const images = [
    "../images/Banner slide - 1.jpg",
    "../images/Banner slide - 2.jpg",
    "../images/Banner slide - 3.jpg",
    "../images/Banner slide - 4.jpg",
    "../images/Banner slide - 5.jpg",
  ];

  return (
    <Box
      sx={{
        border: 2,
        borderRadius: 4,
        marginLeft: "18%",
        marginTop: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 800,
        maxWidth: "50%",
        height: 300,
        backgroundColor: "white",
        "&:hover": {},
      }}
    >
      <OuterWrapperBack>
        <IconWrapper onClick={() => console.log("TODO!!!")}>
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
          <h1>TEST</h1>
        </Grid>
      </Grid>
      <OuterWrapperForward>
        <IconWrapper onClick={() => console.log("TODO")}>
          <ArrowForwardIosIcon sx={{}} />
        </IconWrapper>
      </OuterWrapperForward>
    </Box>
  );
}
