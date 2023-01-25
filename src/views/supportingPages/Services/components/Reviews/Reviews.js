/* eslint-disable  no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

const Reviews = () => {
  const theme = useTheme();

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });


  return (
    <Box display={'flex'} flexWrap={isSm? 'no-wrap' :'wrap'}
    >
      <Box display={'flex'}  alignItems={'center'}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Para atender nuestros pilares de gestión, contamos con los siguientes atributos
        </Box>
        
      </Box>
      <Box display={'flex'} flexDirection='column' width={'100%'}>
   
        <Box
          component={Card}
          boxShadow={3}
          borderRadius={5}
          padding={{ xs: 1, sm: 2, md: 3 }}
          marginBottom={2}
        >
          <CardContent>
            <Box>
              <List sx={{ width: '100%', maxWidth: 360 }}>
                {[
                  {title: 'Comportamiento ético y respetuoso estipulado en nuestros estatutos.'},
                  {title: 'La promoción de las buenas prácticas de cobranza.'},
                  {title: 'IVR, Emails, SMS, Chat WhatsApp y Cobranza Telefónica personalizada.'},
                  {title: 'Recuperación de carteras en diferentes mora (Temprana, Vencida, Fallida, etc)'},
                  {title: 'Segmentación de cartera.'},

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
              <Box width={1}>
                <Box
                  component={ListItem}
                  disableGutters
                  width={'auto'}
                  padding={0}
                >
                    
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Box>
        

        <Box
          component={Card}
          boxShadow={3}
          borderRadius={5}
          padding={{ xs: 1, sm: 2, md: 3 }}
        >
          <CardContent>
            <Box>
              <List sx={{ width: '100%', maxWidth: 360 }}>
                {[
                  {title: 'Seguimiento personalizado y constante del cliente.'},
                  {title: 'Gestión y recuperación de las deudas manteniendo la fidelidad de los clientes.'},
                  {title: 'Diseño de reportes a fin de complementar, cubrir y satisfacer las necesidades de nuestros clientes.'},
                  {title: 'Confidencialidad y seguridad en el manejo de la información de nuestros clientes.'},
                  {title: 'Capacidad para aprender y capacitarse sobre los aspectos generales de la empresa acreedora, sus productos y servicios para la gestión de cobranzas: sus características, sus políticas, alternativas de solución, etc.'},
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
              <Box width={1}>
                <Box
                  component={ListItem}
                  disableGutters
                  width={'auto'}
                  padding={0}
                >
                    
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Box>

      </Box>
    </Box>
  );
};

export default Reviews;
