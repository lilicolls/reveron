/* eslint-disable  no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import CloudHostingIllustration from 'svg/illustrations/CloudHosting';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import computer from './img/computer.jpg';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box>
        <Grid
          container
          spacing={4}
          flexDirection={isMd ? 'row' : 'column-reverse'}
        >
          <Grid item xs={12} md={6}>
            <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
              <Box marginBottom={2}>
                <Typography
                  variant="h2"
                  component={'h2'}
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Un desafio
                  <br />
                  <Typography
                    variant="h2"
                    component={'span'}
                    color="secondary"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    permanente
                  </Typography>
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography variant="h6" component="p" color="textSecondary">
                  Contamos con más de 100 posiciones de trabajo y capacidad para crecimiento. 
                  Disponemos de una infraestructura tecnológica y de comunicaciones que respalda nuestra operación en cada momento.
                  <br />
                   Mantenemos altos estándares de seguridad garantizando la confidencialidad y resguardo en el manejo de la información de nuestros clientes
                </Typography>
              </Box>

            </Box>
          </Grid>
          <Grid
            item
            container
            justifyContent={'center'}
            xs={12}
            md={6}
            data-aos={isMd ? 'fade-left' : 'fade-up'}
          >
            <Box
              height={'100%'}
              width={'100%'}
              maxWidth={{ xs: 500, md: '100%' }}
            >
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={computer}
                alt="..."
                effect="blur"
                style={{
                  objectFit: 'cover',
                  cursor: 'poiner',
                  borderRadius: 4,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box component={Divider} marginY={4} />
    </Box>
  );
};

export default Hero;
