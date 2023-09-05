import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

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
  marginLeft: 40,
  marginBottom: 5,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(10),
    width: 'auto',
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
  
    [theme.breakpoints.up('xs')]: {
    width: '8ch',
    '&:focus': {
      width: '12ch',
  }}, 
    
  [theme.breakpoints.up('sm')]: {
    width: '10ch',
    '&:focus': {
      width: '14ch',
  }},

  [theme.breakpoints.up('lg')]: {
    width: '12ch',
    '&:focus': {
      width: '16ch',
  }},

  [theme.breakpoints.up('xl')]: {
    width: '14ch',
    '&:focus': {
      width: '16ch',
  }},
    

    
  },
}));

const SearchBar = () => {
  return (
    <Search >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Hledat…"
        inputProps={{ 'arial-label': 'search' }}
        
      />
    </Search>
  )
}

export default SearchBar;