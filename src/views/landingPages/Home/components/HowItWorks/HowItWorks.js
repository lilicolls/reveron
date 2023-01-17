/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const HowItWorks = () => {
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
          Nuestros servicios
        </Typography>
        <Typography
          variant="h3"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Tu solución a unos cuantos clicks.
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'textSecondary'}
          data-aos={'fade-up'}
        >
          Contamos con múltiples sercivios de gestión y atención de clientes que nos permiten versatilidad y acoplar nuestro staff a sus necesidades.
          reason.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Cobranzas',
            subtitle:
              'Nuestra casa matriz en Venezuela soporta operaciones de este tipo a través de todo Latam,  manejamos una extensa gama de servicios de cobranza integral de cobro con distintos plazos de morosidad.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                />
              </svg>
            ),
          },
          {
            title: 'Telemarketing',
            subtitle:
              'En Grupo Reveron  ofrecemos distintas soluciones de Contact Center para comercios, organizaciones y pymes nuestra fuerza de ventas conformada por ejecutivos telefónicos entrenados para ofrecer servicios en los sectores B2B y B2C.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            ),
          },
          {
            title: 'Atención al cliente',
            subtitle:
              'Nuestro foco es la preparación y correcta inducción de nuestro agentes para brindar un acompañamiento profesional e integral a cada uno de nuestros cliente logrando una completa satisfacción en cada una de sus campañas.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            ),
          },
          {
            title: 'Fidelización',
            subtitle:
              'A través de nuestro servicio de atención remota mantenemos contacto permanente con sus clientes, asegurando siempre una persona disponible para atender sus consultas, entregar información, solucionar sus requerimientos; esto de forma eficiente y personalizada.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            ),
          },
          {
            title: 'Portabilidad',
            subtitle:
              'A través de la ejecución de campañas de portabilidad, nuestro equipo de agentes realiza un análisis comparativo que permiten ofreceerle al usuario una propuesta de valor y, así atrar y captar nuevos clientes de su competencia directa, aportando al crecimiento de su organizacíon.',
            icon: (
              <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            ),
          },
        ].map((item, i) => (
          <Grid key={i} item xs={12} md={4}>
            <Box
              component={ListItem}
              disableGutters
              data-aos={'fade-up'}
              flexDirection={'column'}
              sx={{
                padding: 0,
                alignItems: 'flex-start',
              }}
            >
              <Box component={ListItemAvatar} marginBottom={2}>
                <Box
                  component={Avatar}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  width={60}
                  height={60}
                >
                  <Box color={theme.palette.primary.main}>{item.icon}</Box>
                </Box>
              </Box>
              <ListItemText
                sx={{ margin: 0 }}
                primary={item.title}
                secondary={item.subtitle}
                primaryTypographyProps={{
                  variant: 'h6',
                  gutterBottom: true,
                  sx: { fontWeight: 700 },
                }}
              />
            </Box>
          </Grid>
        ))}
        <Grid item container justifyContent={'center'}>
          <Button
            size={'large'}
            href="/page-customers"
            endIcon={
              <svg
                width={16}
                height={26}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            }
          >
            Ver más
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
