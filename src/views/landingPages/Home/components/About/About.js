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
          no solo hemos acompañado a muchas empresas en la recuperación de carteras y procesos de <br/>
          cobranzas sino también en distintas campañas de telemarketing y fidelización de clientes.
        </Typography>
      </Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={7} data-aos={isMd ? 'fade-right' : 'fade-up'}>
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
              Mantenemos nuestra metodología y valores durante más de 25 años, siempre incorporando a nuestro procesos nuevas y robustas plataformas
             de tecnología que apalancan nuestro crecimiento.
            </Typography>
          </Box>
          <List disablePadding>
            {[
              {
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
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                ),
                title: 'Clientes ',
                subtitle:
                  'Garantizamos una mejor experiencia, fortaleciendo la atención al cliente. Haciéndola más personalizada, ágil y diligente, respondiendo a sus necesidades en el menor tiempo posible.',
              },
              {
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: 'Omnicanalidad',
                subtitle:
                  'Incorporamos nuevos canales de atención ofreciendo múltiples instancias de interacción con el cliente, lo que significa una estrategia de valor que impliquica una mejora continua en nuestros plazos y alcance de metas crucialmente importantes.',
              },
              {
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                ),
                title: 'Calidad',
                subtitle: 'Brindar un servicio integral de gestión a la medida de cada cliente en forma honesta, respetuosa, eficiente y efectiva. Siempre orientados en el diseño de estrategias que permitan el creicimiento de vuestra organización.',
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
          md={4}
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
