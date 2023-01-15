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
        Gestión y enfoque
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
          Mantenemos segmentados nuestros procesos y 
          <br />
          planificamos de forma estratégica para lograr la confianza de vuestros clientes. 
          <br />
         Y así lograrlos objetivos de ventas,
          <br />
          comercialización y recuperación de carteras.
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
        <Grid item xs={12} md={6}>
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