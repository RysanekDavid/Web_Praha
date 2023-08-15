import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import ResponsiveAppBar from "./components/AppBar"

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1275, // Upravena hodnota
      xl: 1536,
    },
  },
});


function App() {
  return (
  <ThemeProvider theme={customTheme}>
    <ResponsiveAppBar></ResponsiveAppBar>   
  </ ThemeProvider > 
  );
}

export default App;
