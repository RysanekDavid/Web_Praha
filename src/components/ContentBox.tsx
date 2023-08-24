import * as React from 'react';
import Box from '@mui/material/Box';
import { ClientRequest } from 'http';
import { relative } from 'path';
import { Grid } from '@mui/material';

export default function BoxSx() {
  return (

    <Box

      sx={{
        border:1,
        borderRadius: 2,
        marginLeft: 60,
        marginTop: 3,
        display:"grid",
        gridTemplateRows: 'auto',
        
        width: 300,
        height: 200,
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'white',
          opacity: [1, 1, 1],
          
        },
      }}
    />


  );
}