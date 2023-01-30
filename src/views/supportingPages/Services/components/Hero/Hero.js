/* eslint-disable  no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DesignerIllustration from 'svg/illustrations/Designer';
import callCenter from './img/callCenter.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Hero = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          Nuestros servicios
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Generamos valor mejorando la experiencia de tus clientes.
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Nos enfocamos en revalorizar la importancia del servicio de atención al cliente y gestión de cobranzas, apoyando con nuestro trabajo a mejorar la imagen de las marcas y su evolución en el mercado. Nos enfocamos sobre tus objetivos en atención al cliente, para poder ofrecerte una propuesta de valor y mejorar la rentabilidad de tu negocio.
        </Typography>
        <Box marginTop={3} display={'flex'} justifyContent={'center'}>
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Contact us
          </Box>

          
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
     
        {/* <DesignerIllustration height={'100%'} width={'100%'} /> */}
        <Box height={'100%'} width={'100%'}>
          <LazyLoadImage
            height={'100%'}
            width={'100%'}
            src={callCenter}
            alt="..."
            effect="blur"
            style={{
              objectFit: 'cover',
              cursor: 'poiner',
              borderRadius: 4,
            }}
          />
          {/* <TeamWorkingIllustration height={'100%'} width={'100%'} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
