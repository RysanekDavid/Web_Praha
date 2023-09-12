import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: "relative",
  top: 2,
  right: 10,
  zIndex: 1,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 30,
  marginBottom: 5,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5),
    width: 'auto',
  },

  [theme.breakpoints.down ('sm')]: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(8),
    width: 'auto',
    border: 'none'
  },

  border: '1px solid black',
  borderTopLeftRadius: "15px",
  borderTopRightRadius : "15px",
  borderBottomLeftRadius : "15px",
  borderBottomRightRadius : "15px"
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: "black",
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  


  [theme.breakpoints.up('md')]: {

    width: '20ch',
    '&:focus': {
      width: '14ch',
  }},

  [theme.breakpoints.up('lg')]: {
    width: '9ch',
    '&:focus': {
      width: '12ch',
  }},

  [theme.breakpoints.up('xl')]: {
    width: '14ch',
    '&:focus': {
      width: '16ch',
  }},
    

    
  },
}));

const SearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isFull = useMediaQuery (theme.breakpoints.up('sm'));
  
  return (
    
  <Search>
    <>
    {isFull ? (
    <>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
        <StyledInputBase
        placeholder="Hledat…"
        inputProps={{ 'arial-label': 'search' }}
        />
        </>
    ) : null}

      {isMobile ? (
        <SearchIconWrapper >
          <SearchIcon sx={{fontSize: 40}} />
        </SearchIconWrapper>
      ) : null}

      </>
    </Search>
  )
}

export default SearchBar;