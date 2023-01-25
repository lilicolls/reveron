/* eslint-disable  no-unused-vars */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { colors } from '@mui/material';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';



const WhatWeDo = () => {
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
          Tu solución a unos cuantos clicks
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Contamos con múltiples sercivios de gestión y atención de clientes que nos permiten versatilidad y acoplar nuestro staff a sus necesidades.
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
      <Grid container spacing={4}>
        {[
          {
            title: 'Cobranzas',
            subtitle:
            'Desde nuestra casa matriz en Venezuela brindamos un servicio integral de cobranza abarcando el área bancaria y comercial, desarrollando estrategias de cobranza que garanticen la recuperación de carteras morosas, bancarias, servicios, consumos, facuras entre otros.',
            icon: (
              <AssuredWorkloadOutlinedIcon/>
            ),
          },
          {
            title: 'Telemarketing',
            subtitle:
              'En Grupo Reveron ofrecemos distintas soluciones de Contact Center para comercios, organizaciones y pymes. Nuestra fuerza de ventas conformada por ejecutivos telefónicos entrenados para ofrecer servicios en los sectores B2B y B2C.',
            icon: (
              <SupportAgentOutlinedIcon/>
            ),
          },
          {
            title: 'Atención al cliente',
            subtitle:
              'Nuestro foco es la correcta preparación e inducción de nuestros agentes, para brindar un acompañamiento profesional e integral a cada uno de nuestros cliente logrando una completa satisfacción en cada una de sus campañas.',
            icon: (
              <ConnectWithoutContactOutlinedIcon/>
            ),
          },
          {
            title: 'Fidelización',
            subtitle:
              'Nuestro servicio de atención remota nos permite mantenernos en contacto permanente con sus clientes, asegurando siempre una persona disponible para atender sus consultas, entregar información y solucionar sus requerimientos; esto de forma eficiente y personalizada.',
            icon: (
              <HandshakeOutlinedIcon/>
            ),
          },
          {
            title: 'Portabilidad',
            subtitle:
              'A través de la ejecución de campañas de portabilidad, nuestro equipo de agentes realiza un análisis comparativo que permiten ofrecerle al usuario una propuesta de valor y, así captar nuevos clientes de su competencia directa, aportando al crecimiento de su organización.',
            icon: (
              <QueryStatsOutlinedIcon/>
            ),
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box component={Card} boxShadow={3} borderRadius={4}>
              <Box
                component={CardContent}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                padding={{ xs: 2, sm: 4, md: 6 }}
                sx={{
                  '&:last-child': {
                    paddingBottom: { xs: 2, sm: 4, md: 6 },
                  },
                }}
              >
                <Box
                  component={Avatar}
                  variant="rounded"
                  width={84}
                  height={84}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  borderRadius={5}
                >
                  <Box color={theme.palette.primary.main}>{item.icon}</Box>
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  fontWeight={500}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatWeDo;
