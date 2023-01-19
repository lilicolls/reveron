/* eslint-disable  no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import office from './img/office.jpg';
// import MenuIcon from '@mui/icons-material/Menu';
import GroupsIcon from '@mui/icons-material/Groups';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={{ xs: 4, sm: 8, md: 12 }}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
          data-aos="fade-up"
        >
          Formamos parte de tu equipo
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          data-aos="fade-up"
        >
          Con una amplia trayectoria desde nuestra conformación en 1990,
          <br />
          hemos acompañado a muchas empresas en la recuperación de carteras y procesos de <br/>
          cobranzas así como en distintas campañas de telemarketing y fidelización de clientes.
        </Typography>
      </Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Box
              component={Typography}
              fontWeight={700}
              variant={'h4'}
              gutterBottom
            >
              <Typography color="primary" variant="inherit" component="span">
                Nos enfocamos
              </Typography>{' '}
              en lo importante
            </Box>
            <Typography variant={'h6'} component={'p'} color={'textSecondary'}>
            Mantenemos nuestra metodología y valores durante más de 30 años, siempre incorporando a nuestros procesos nuevas y robustas plataformas de tecnología que apalancan nuestro crecimiento.
            </Typography>
          </Box>
          <List disablePadding>
            {[
              {
                icon: (
                  <GroupsIcon/>
                ),
                title: 'Clientes ',
                subtitle:
                  'Garantizamos una excelente experiencia, fortaleciendo la atención al cliente; haciéndola más personalizada, ágil y diligente, respondiendo a sus necesidades en el menor tiempo posible.',
              },
              {
                icon: (
                  <HubTwoToneIcon/>
                ),
                title: 'Omnicanalidad',
                subtitle:
                  'Incorporamos nuevos canales de atención ofreciendo múltiples instancias de interacción con el cliente, lo que significa una estrategia de valor que implica una mejora continua en nuestros plazos y alcance de metas crucialmente importantes.',
              },
              {
                icon: (
                  <TaskAltOutlinedIcon/>
                ),
                title: 'Calidad',
                subtitle: 'Brindamos un servicio integral de gestión a la medida de cada cliente en forma honesta, respetuosa, eficiente y efectiva. Siempre orientados en el diseño de estrategias que permitan el crecimiento de nuestra organización.',
              },
            ].map((item, index) => (
              <ListItem key={index} disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Box
                    component={Avatar}
                    variant={'rounded'}
                    color={theme.palette.primary.dark}
                    bgcolor={`${theme.palette.primary.light}22`}
                  >
                    {item.icon}
                  </Box>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-left' : 'fade-up'}
        >
          <Box component={Card} boxShadow={4} height={'100%'} width={'100%'}>
            <Box
              component={CardMedia}
              height={'100%'}
              width={'100%'}
              minHeight={300}
              image={office}
              sx={{
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
              style= {{filter: 'grayscale(100%)'}}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
/* eslint-disable  no-unused-vars */
