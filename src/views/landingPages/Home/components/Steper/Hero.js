/* eslint-disable  no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          color: theme.palette.common.white,
          fontWeight: 900,
        }}
      >
        Impulsamos tus soluciones
      </Typography>
      <Box>
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{
            color: theme.palette.common.white,
            fontWeight: 400,
          }}
        >
          Nuestra propósito es conocer las necesidades de nuestros clientes y 
          <br />
          manejar información actualizada que nos permita acelerar los procesos y 
          <br />
          concretar una gestión de vuestros clientes de forma efectiva.
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={8}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
/* eslint-disable  no-unused-vars */