import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Features = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      {[
        {
          title: 'Central Telefónica digital para el manejo de VOZ sobre IP.',
        },
        {
          title: 'Integración con enlaces E1 para telefonía fija.',
        },
        {
          title: 'Telefonía móvil para todas las operadoras.',
        },
        {
          title: 'Servidores de avanzada.',
        },
        {
          title: 'Sistema de grabación y escuchas de llamadas para control de calidad.',
        },
        {
          title: 'Estaciones de trabajo equipadas con Pc, teléfonos IP o Softphone.',
        },
        {
          title: 'Enlace primario de internet redundante.',
        },
        {
          title: 'Software de Cobranza desarrollado a la medida.',
        },
        {
          title: 'Nuestra instalación cuenta con sistemas de cámaras CCTV y alarmas anti-intrusión.',
        },
        {
          title: 'Confidencialidad y seguridad en el manejo de la información de nuestros clientes.',
        },
      ].map((item, i) => (
        <Grid key={i} item xs={12} md={6}>
          <ListItem
            component="div"
            disableGutters
            data-aos={'fade-up'}
            sx={{
              alignItems: 'center',
              padding: 0,
            }}
          >
            <Box component={ListItemAvatar} marginRight={2}>
              <Box
                component={Avatar}
                bgcolor={alpha(theme.palette.primary.main, 0.1)}
                width={60}
                height={60}
              >
                <Box color={theme.palette.primary.main}><CheckCircleIcon/></Box>
              </Box>
            </Box>
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{ variant: 'h6', gutterBottom: true }}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 700,
                },
                margin: 0,
              }}
            />
          </ListItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
