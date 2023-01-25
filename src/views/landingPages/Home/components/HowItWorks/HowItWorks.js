/* eslint-disable react/no-unescaped-entities */
/* eslint-disable  no-unused-vars */
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
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';

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
          Tu solución a unos cuantos clicks
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'textSecondary'}
          data-aos={'fade-up'}
        >
          Contamos con múltiples sercivios de gestión y atención de clientes que nos permiten versatilidad y acoplar nuestro staff a sus necesidades.
        </Typography>
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
          {/* <IconButton aria-label="twitter" size={'large'}>
            <AddIcon />
          </IconButton> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
