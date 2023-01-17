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



const Partners = () => {
  const theme = useTheme();
  return (
    <Box>
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
      <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
        {[
          gedcoIcon,
          bbva,
          citi,
          proactionSolutionSvg,
          movistar,
          gama,
          gsaBlue,
          creditiaSvg,
          estudioWeisfeld,
        ].map((item, i) => (
          <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
            <Box
              component="img"
              height={'100%'}
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
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
/* eslint-disable  no-unused-vars */
