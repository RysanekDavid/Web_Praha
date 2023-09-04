import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../images/Portál-hlavního-města-Prahy.png"
import SearchBar from './SearchBar';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageSelect from "./LanguageSelect"
import LanguageIcon from '@mui/icons-material/Language';
import WeatherWidget from './WeatherDisplay';
import "../styles/LogoSize.css"
import VideocamIcon from '@mui/icons-material/Videocam';




const pages = ['O městě', 'Potřebuji řešit','Doprava','Co dělat v Praze', 'Kontakty'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { i18n } = useTranslation();

  const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState<null | HTMLElement>(null);

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
    <AppBar position="static" sx={{ background: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={logo} alt="Logo" className="logo"  />
          <Box sx={{ flexGrow:0.95, display:'flex'}}>
            <SearchBar />
          </Box>
          
          

          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu}>
                <MenuIcon style={{color: "black"}}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
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
            <Box sx={{ flexGrow: 5, paddingRight: "30px", display: 'flex', paddingTop: "4px" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#45494f', display: 'block', fontWeight: "550", paddingLeft : "30px", whiteSpace: "nowrap", fontSize: "15px"}}
                >
                  {page}
                </Button>
              ))}
            </Box>

          )}

          <Box sx={{ flexGrow: 0, color: "black", marginRight: "20px" }}>
            <VideocamIcon style = {{ fontSize: "30px", paddingTop: "5px" }} />
          </Box>

          <Box sx={{ height: "30px", width: "1px", backgroundColor: "black" }} />

          <Box sx={{ flexGrow: 0, color: "black", paddingLeft: "15px"}}>
            <WeatherWidget />
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center'}}>
            {/* Přepínač jazyků */}
            <Button 
                onClick={openLanguageMenu} 
                startIcon={<LanguageIcon style={{ color: "black", fontSize: "25px" }} />} 
                endIcon={<KeyboardArrowDownIcon style={{ color: "black", fontSize: "25px" }} />}  
                style={{ color: "black" , fontSize: "16px"}}>
                <b>{i18n.language === 'cs' ? 'CZ' : 'EN'}</b>
            </Button>
            <Menu
              anchorEl={languageMenuAnchor}
              keepMounted
              open={Boolean(languageMenuAnchor)}
              onClose={closeLanguageMenu}
            >
              <MenuItem onClick={() => switchLanguage('cs')}>CZ</MenuItem>
              <MenuItem onClick={() => switchLanguage('en')}>EN</MenuItem>
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 0, }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
