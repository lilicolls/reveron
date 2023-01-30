/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
const Map = ({ themeMode = 'light' }) => {
  return (
    <Box>
      {/* <Box>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
        >
          Contact us
        </Typography>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
            }}
          >
            Get in touch
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={'textSecondary'}>
            We'd love to talk about how we can help you.
          </Typography>
        </Box>
      </Box> */}
      <Box marginY={4}>
        <Box
          component={'iframe'}
          borderRadius={2}
          minHeight={400}
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.1116125616336!2d-66.86559418461405!3d10.491866992514941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58fdb8435321%3A0xa9ad544317e0e3eb!2sEdificio%20Roraima%2C%20Avenida%20Francisco%20de%20Miranda%2C%20Caracas%201060%2C%20Miranda%2C%20Venezuela!5e0!3m2!1ses!2sus!4v1674832256520!5m2!1ses!2sus"
          sx={{
            filter:
              themeMode === 'dark' ? 'grayscale(0.5) opacity(0.7)' : 'none',
          }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Contactanos:
          </Typography>
          <Typography variant={'subtitle1'}>+58 (212) 628.01.00</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Escribenos:
          </Typography>
          <Link underline="none" component="a" href="mailto:reveronsc@gruporeveron.com?Subject=Informacion%20General" color="textPrimary">
              hi@maccarianagency.com
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Dirección:
          </Typography>
          <Typography variant={'subtitle1'}>
          Avenida Francisco de Miranda, Edificio Roraima, Piso 4, Oficina 4-F. Campo Alegre, Caracas - Venezuela.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Map.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Map;
