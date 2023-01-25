/* eslint-disable  no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import gedcoIcon from './icons/gedco.svg';
import bbva from './icons/bbva.svg';
import movistar from './icons/movistar.svg';
import creditiaSvg from './icons/creditia.svg';
import proactionSolutionSvg from './icons/proactionSolution.svg';
import estudioWeisfeld from './icons/estudioWeisfeld.svg';
import citi from './icons/citi.svg';
import gama from './icons/gama.svg';
import gsaBlue from './icons/gsaBlue.svg';
import reveron from './icons/logoReveron.svg';
import americanExpress from './icons/americanExpress.svg';
import americanExpressDarkTheme from './icons/americanExpressDarkTheme.svg';
import aeroCar from './icons/logo-aero.png';
import Grid from '@mui/material/Grid';
import tracker from './icons/tracker.svg';
import bnc from './icons/bnc.png';
import bExterior from './icons/bExterior.svg';
import lasMercedes from './icons/lasMercedes.svg';



const Partners = () => {
  const theme = useTheme();
  return (
    <Grid container flexDirection={'column'} alignItems='center'>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Nuestros clientes
        </Typography>
      </Box>
      <Grid container display="flex" flexWrap="wrap" justifyContent={'space-between'} md={10} xs={12}>
        {[
          proactionSolutionSvg,
          movistar,
          gama,
          estudioWeisfeld,
          aeroCar,
          tracker,
          bnc,
          bExterior,
          citi,
          lasMercedes,
          gsaBlue,
          creditiaSvg,
          gedcoIcon,
          bbva,
          theme.palette.mode === 'dark' ? americanExpressDarkTheme: americanExpress,
          
        ].map((item, i) => (
          <Grid item maxWidth={90}  marginRight={4} margingTop={2} key={i}
            display= 'flex' alignItems= 'center'>
            <Box
              component="img"
              height={'auto'}
              width={'100%'}
              src={item}
              alt="..."
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Partners;
/* eslint-disable  no-unused-vars */
