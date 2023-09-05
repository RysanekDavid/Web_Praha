

import * as React from 'react';
import Box from '@mui/material/Box';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';


const IconWrapper = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transition: 'background-color 0.4s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});


export default function BoxSx() {
  return (

    <Box
    
      sx={{
        border:1,
        borderRadius: 3,
        marginLeft: 50,
        marginTop: 8,
        display:"flex",
        alignItems: 'center',
        width: 800,
        height: 300,
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'white',
          opacity: [1, 1, 1],
          
        },
      }}
    >


      <IconWrapper onClick={() => console.log('TODO!!!')}>
        <ArrowBackIosNewIcon sx={{ paddingLeft: 2 }} />
      </IconWrapper>
      <Grid container justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
        <Grid item>
          <h1>TEST</h1>
        </Grid>
      </Grid>
      <IconWrapper onClick={() => console.log('TODO')}>
        <ArrowForwardIosIcon sx={{ paddingRight: 2 }} />
      </IconWrapper>
    </Box>





  );
}

