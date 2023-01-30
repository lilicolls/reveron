import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Features = () => {
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
          Features
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          The features make the difference
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Seguridad',
            subtitle:
              'Gracias a nuestra tecnología basado en la nube, cuentas con total seguridad de tu infraestructura y datos. Además, nuestros agentes pueden trabajar remotamente sin arriesgar la seguridad de tu información permitiendo nuestra operación en toda Latinoamérica y el resto del mundo.',
          },
          {
            title: 'Agilidad',
            subtitle:
              'Integramos tu operación a nuestros  aplicativos internos y cualquier canal de comunicación, lo que permite a nuestros gentes tengan a la mano información relevante para interacciones personalizadas con tus clientes.',
          },
          {
            title: 'Flexibilidad',
            subtitle: 'A través de nuestra infraestructura entregamos una  experiencia digital única, disponibilizamos simultáneas a nuestros agentes una gran variedad de canales, como voz, SMS, WhatsApp, Email y mucho más desde una misma interfaz.',
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={'100%'}
              height={'100%'}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                display={'flex'}
                flexDirection={'column'}
                data-aos={'fade-up'}
                borderRadius={3}
              >
                <Box component={CardContent} padding={4}>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                  >
                    {item.title}
                  </Box>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box
                  component={CardActions}
                  justifyContent={'flex-end'}
                  paddingX={4}
                >
                  <Button size="large">Learn More</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
