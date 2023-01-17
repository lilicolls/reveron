import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TeamWorkingIllustration from 'svg/illustrations/TeamWorking';

const WhyUs = () => {
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
          Tecnología
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
          data-aos={'fade-up'}
        >
           Poder y flexibilidad para tu negocio
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          Disponemos de una infraestructura tecnológica y de comunicaciones
          <br />
          que permite ofrecer servicios de calidad en forma continua 
          y con altos estandares de seguridad.
       

        </Typography>
        <Box
          marginTop={3}
          display={'flex'}
          justifyContent={'center'}
          data-aos={'fade-up'}
        >
          <Button variant={'contained'} color={'primary'} size={'large'}>
            Contact us
          </Button>
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box height={'100%'} width={'100%'} maxWidth={600} data-aos={'fade-up'}>
          <TeamWorkingIllustration height={'100%'} width={'100%'} />
        </Box>
      </Box>
    </Box>
  );
};

export default WhyUs;
