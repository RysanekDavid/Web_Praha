import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../images/Portál-hlavního-města-Prahy.png";
import SearchBar from "./SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WeatherWidget from "./WeatherDisplay";
import "../styles/LogoSize.css";
import { Grid, Hidden } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const pages = [
  "O městě",
  "Potřebuji řešit",
  "Doprava",
  "Co dělat v Praze",
  "Kontakty",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { i18n } = useTranslation();

  const [languageMenuAnchor, setLanguageMenuAnchor] =
    React.useState<null | HTMLElement>(null);

  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageMenuAnchor(null); // Zavřít menu po výběru jazyka
  };

  const openLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const closeLanguageMenu = () => {
    setLanguageMenuAnchor(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ background: "#FFFFFF", paddingTop: isSmallScreen ? "10px" : "0px" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "center",
            alignItems: "space-between",
          }}
        >
          <img src={logo} alt="Logo" className="logo" />

          <Box sx={{ flexGrow: 0.1, display: "flex" }}>
            <SearchBar />
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon
                  sx={{
                    color: "black",
                    fontSize: "36px",
                    display: "flex",
                  }}
                />
              </IconButton>

              <Hidden mdDown>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    color: "black",
                    marginLeft: "0px",
                    whiteSpace: "nowrap",
                    display: "flex",
                    marginRight: "40px",
                  }}
                >
                  Hlavní menu
                </Typography>
              </Hidden>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box
              sx={{
                flexGrow: 5,
                display: "flex",
                alignItems: "center",
                paddingTop: "2px",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#45494f",
                    display: "block",
                    fontWeight: "550",
                    paddingLeft: "20px",
                    whiteSpace: "nowrap",
                    fontSize: "15px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}

          <Box
            sx={{
              flexGrow: 0,
              color: "black",
              marginRight: isSmallScreen ? "2px" : "40px",
              marginLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <VideocamIcon
              style={{
                fontSize: isSmallScreen ? "28px" : "30px",
                paddingTop: isSmallScreen ? "0px" : "5px",
              }}
            />

            <Box
              sx={{
                height: "30px",
                width: "1px",
                backgroundColor: "black",
                marginRight: "12px",
                marginLeft: "12px",
              }}
            />

            <WeatherWidget />
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              paddingRight: "10px",
            }}
          >
            {/* Přepínač jazyků */}
            <Button
              onClick={openLanguageMenu}
              startIcon={
                <LanguageIcon sx={{ color: "black", fontSize: "25px" }} />
              }
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{ color: "black", fontSize: "25px" }}
                />
              }
              style={{
                color: "black",
                fontSize: "16px",
                paddingRight: isSmallScreen ? "0%" : "64%",
                paddingLeft: isSmallScreen ? "50%" : "0%",
              }}
            >
              <b>{i18n.language === "cs" ? "EN" : "CZ"}</b>
            </Button>
            <Menu
              anchorEl={languageMenuAnchor}
              keepMounted
              open={Boolean(languageMenuAnchor)}
              onClose={closeLanguageMenu}
            >
              <MenuItem onClick={() => switchLanguage("en")}>EN</MenuItem>
              <MenuItem onClick={() => switchLanguage("cs")}>CZ</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <Box
        sx={{
          backgroundColor: "#413D3C",
          color: "white",
          paddingBottom: "3px",
          paddingTop: "3px",
          whiteSpace: "nowrap",
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="space-between"
          sx={{ flexWrap: "wrap", paddingRight: "10%" }}
        >
          <Hidden lgUp>
            <Accordion
              sx={{
                width: "100%",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "white",
                      paddingRight: "12%",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ color: "white", paddingLeft: "10%" }}
              >
                Kontakty
              </AccordionSummary>
              <Grid
                container
                spacing={0}
                justifyContent="start"
                display="flex"
                sx={{ color: "white" }}
              >
                {
                  <Box>
                    <CallIcon
                      sx={{
                        paddingLeft: "12px",
                        width: "22px",
                        height: "22px",
                        marginRight: "5px",
                        color: "white",
                      }}
                    />
                    infolinka
                  </Box>
                }
              </Grid>
            </Accordion>
          </Hidden>
          <Grid
            paddingLeft="6%"
            item
            xs={1}
            sm={1}
            md={2}
            lg={1}
            xl={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Hidden lgDown>
              <CallIcon
                sx={{ width: "22px", height: "22px", marginRight: "5px" }}
              />
              800 100 000
            </Hidden>
          </Grid>

          <Grid
            paddingLeft="6%"
            item
            xs={1}
            sm={1}
            md={2}
            lg={1}
            xl={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Hidden lgDown>
              <CallIcon
                sx={{ width: "22px", height: "22px", marginRight: "5px" }}
              />
              236 001 111(ústředna)
            </Hidden>
          </Grid>

          <Grid
            paddingLeft="6%"
            item
            xs={1}
            sm={1}
            md={2}
            lg={1}
            xl={1}
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: {
                xs: "0px",
                sm: "0px",
                md: "72px",
                lg: "72px",
                xl: "72px",
              },
              marginRight: {
                xs: "0px",
                sm: "0px",
                md: "-20px",
                lg: "-20px",
                xl: "-20px",
              },
            }}
          >
            <Hidden lgDown>
              <FacebookIcon
                sx={{ width: "23px", height: "23px", marginRight: "5px" }}
              />
              praha.eu
            </Hidden>
          </Grid>

          <Grid
            paddingLeft="6%"
            item
            xs={1}
            sm={1}
            md={2}
            lg={1}
            xl={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Hidden lgDown>
              <EmailIcon
                sx={{ width: "22px", height: "22px", marginRight: "5px" }}
              />
              e-podatelna
            </Hidden>
          </Grid>

          <Grid
            paddingLeft="6%"
            item
            xs={1}
            sm={1}
            md={2}
            lg={1}
            xl={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Hidden lgDown>
              <EmailIcon
                sx={{ width: "22px", height: "22px", marginRight: "5px" }}
              />
              info@praha.eu
            </Hidden>
          </Grid>

          <Grid
            paddingLeft="6%"
            item
            xs={1}
            sm={1}
            md={2}
            lg={1}
            xl={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Hidden lgDown>
              <AccountBoxIcon
                sx={{ width: "22px", height: "22px", marginRight: "5px" }}
              />
              Portál Pražana
            </Hidden>
          </Grid>

          <Grid
            paddingLeft="6%"
            paddingRight="7%"
            item
            xs={1}
            sm={2}
            md={2}
            lg={1}
            xl={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Hidden lgDown>
              <MenuBookIcon
                sx={{ width: "22px", height: "22px", marginRight: "5px" }}
              />
              adresář zaměstnanců
            </Hidden>
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
