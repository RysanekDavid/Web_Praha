import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme, useMediaQuery } from "@mui/material";

export default function CouncilBox() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        border: 10,
        borderColor: "gray",
        overflow: "hidden",
        position: "absolute",
        borderRadius: 3,
        right: "16%",
        top: "14%",
        width: 400,
        maxWidth: "70%",
        height: 285,
        backgroundColor: "white",
        "&:hover": {},
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1 }}
      >
        <Grid item></Grid>
      </Grid>
    </Box>
  );
}
