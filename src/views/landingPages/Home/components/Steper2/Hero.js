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
        Nuestra trayectoria nos define
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
          Contamos con más de 25 años de experiencia.
          <br />
          Nos mantenemos en constante evolución y adaptamos nuestra operación
          <br />
         a sus necesidades para alcanzar todos tus objetivos.

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