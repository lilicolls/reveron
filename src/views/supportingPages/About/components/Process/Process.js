/* eslint-disable  no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { colors } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import JoinInnerSharpIcon from '@mui/icons-material/JoinInnerSharp';
import JoinLeftSharpIcon from '@mui/icons-material/JoinLeftSharp';
import JoinRightSharpIcon from '@mui/icons-material/JoinRightSharp';
import { useTheme } from '@mui/material/styles';

const Process = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        {/* <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          What we do
        </Typography> */}
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
          marginBottom={2}
        >
          Tu haces negocios <br /> nosotros impulsamos tu gestión
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Desde 1990, hemos ayudado a 100 empresas de distintos sectores en la segmentación de carteras, 
          concretar cobranzas y en mejorar sus indicadores de atención de clientes
        </Typography>
        {/* <Box marginTop={3} display={'flex'} justifyContent={'center'}>
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
        </Box> */}
      </Box>
      <Grid container spacing={4} marginTop={3}>
        {[
          {
            title: 'Misión',
            subtitle:
              `Brindar un servicio integral de gestión de cobranza a la medida de cada cliente en forma honesta, 
              respetuosa, eficiente y efectiva, orientados a la mejora continua en lo que respecta a sus indicadores 
              de recuperación y en el diseño de estrategias orientadas a maximizar los resultados generando valor en las 
              arrasad de cobranzas, telemarketing, análisis de crédito y fidelización de clientes.`,
            icon: (
              <JoinLeftSharpIcon/>
            ),
          },
          {
            title: 'Visión',
            subtitle:
              `Ser una empresa de Servicios de atención al cliente y gestión de cobranzas exitosa 
              reconocida por la calidad, excelencia operativa y continua inovación, impulsada por el talento de nuestro recurso humano, 
              guiada por un modelo de negocio que comparte el riesgo y la rentabilidad.`,
            icon: (
              <JoinInnerSharpIcon/>
            ),
          },
          // {
          //   title: 'Valores',
          //   subtitle:
          //     'We develop your website using the best practices and standards, so you have a perfectly responsive, lightning fast, SEO-friendly, and super scalable website.',
          //   icon: (
          //     <svg
          //       width={40}
          //       height={40}
          //       xmlns="http://www.w3.org/2000/svg"
          //       fill="none"
          //       viewBox="0 0 24 24"
          //       stroke="currentColor"
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         strokeWidth={2}
          //         d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          //       />
          //     </svg>
          //   ),
          //   color: colors.green,
          // },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box color={theme.palette.primary.main}>
              {item.icon}
            </Box>
            <Box
              component={Typography}
              variant={'h6'}
              gutterBottom
              fontWeight={500}
            >
              {item.title}
            </Box>
            <Typography color="text.secondary">{item.subtitle}</Typography>
          </Grid>
        ))}
        <Grid item xs={12} md={4} >
          <Box color={theme.palette.primary.main}>
            <JoinRightSharpIcon/>
          </Box>
          <Box
            component={Typography}
            variant={'h6'}
            fontWeight={500}
          >
            Valores
          </Box>
          <Box>
            <List sx={{ width: '100%', maxWidth: 360 }}>
              {[
                {title: 'Confidencialidad.'},
                {title: 'Responsabilidad.'},
                {title: 'Honestidad.'},
                {title: 'Compromiso.'},
                {title: 'Trabajo en equipo.'}
              ].map((item, i) => {
                const labelId = `checkbox-list-label-${i}`;

                return (
                  <ListItem
                    key={i}
                    disablePadding
                  >
                    <ListItemIcon>
                      <FiberManualRecordOutlinedIcon sx={{height: '12px', width: '12px'}}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${item.title}`} 
                      sx={{
                        marginLeft: -4,
                      }}
                    />

                  </ListItem>
                );
              })}
            </List>
          </Box>
          {/* <Typography color="text.secondary">Otros textos</Typography> */}
        </Grid>
      </Grid>
    </Box>
  );
};

Process.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Process;
/* eslint-disable  no-unused-vars */