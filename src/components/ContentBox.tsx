import * as React from 'react';
import Box from '@mui/material/Box';
import { ClientRequest } from 'http';

export default function BoxSx() {
  return (

    <Box

      sx={{
        border:1,
        borderRadius: 2,
        
        width: 100,
        height: 100,
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
          
        },
      }}
    />


  );
}