/* eslint-disable react/prop-types */
/* eslint-disable  no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {
  Steper, Steper2, Steper3, Steper4
} from '../../components';
import img from './img/img-1.jpg';
import imgTeam from './img/team-lead.jpg';
import imgCall from './img/working-call.jpg';
import office from './img/office.jpg';
import coffe from './img/coffe.jpg';
import video from './img/video.mp4';
import graph from './img/graph.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';

function SampleNextArrow(props) {
  const { className, style, onClick, isXs  } = props;
  return (
    isXs &&  <Box
      className={className}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, isXs } = props;
  return (
    isXs && <Box
      className={className}
      style={{ ...style, display: 'block', left: '10px',zIndex: '2' }}
      onClick={onClick}
      zindex={2}
    />
  );
}



const Services = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow isXs={matches}/>,
    prevArrow: <SamplePrevArrow isXs={matches} />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    lazyLoad: true,
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        {[
          {
            title: 'Somos tu mejor aliado',
            subtitle:
                `Sin importar tu sector, nuestro equipo te acompaña durante todo el proceso
                \n
                de cobranzas, reclutamiento, selección, análisis de crédito, levantamiento de datos y  
                \n
                recuperación de carteras.`,
            img: coffe,
          },
          {
            // eslint-disable-next-line quotes
            title: "Nuestra trayectoria \n nos define",
            subtitle:
                `Contamos con más de 30 años de experiencia.
                \n
                Nos mantenemos en constante evolución y adaptamos nuestra operación
                \n
               a sus necesidades para alcanzar todos tus objetivos.`,
            img: office,
          },
          {
            title: 'Impulsamos tus soluciones',
            subtitle: `Nuestro propósito es conocer las necesidades de nuestros clientes,
            \n
            manejar información actualizada que nos permite acelerar los procesos
            \n
            y concretar una gestión efectiva.`,
            img: imgCall
          },
          {
            title: 'Gestión y enfoque',
            subtitle: `Mantenemos segmentados nuestro proceso y planificamos de 
            \n
            forma estratégica para consolidar la confianza de nuestros clientes finales,
            \n
            logrando así los objetivos de ventas,
            \n
            comercialización y recuperación de carteras.`,
            img: graph
          }
        ].map((item, i) => (
          <Box
            key={i}
            boxShadow={{ xs: 1, sm: 3 }}
            minHeight={{ xs: 'calc(100vh - 100px)', md: 'calc(100vh - 100px)' }}
            height={'auto'}
            position={'relative'}
            sx={{
              backgroundImage:
              `url("${item.img}")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              display: 'flex !important',
              alignItems: 'center',
              justifyContent: 'center',
              '&:after': {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100%',
                width: '100%',
                content: '" "',
                zIndex: 1,
                backgroundColor: theme.palette.primary.dark,
                backgroundAttachment: 'fixed',
                opacity: 0.7,
              },
            }}
          >
            <Grid
              display={'flex'}
              justifyContent="center"
              alignItems="center"
              padding={{ xs: 2, sm: 4, md: 6 }}
              zIndex={2}
              container
            > 
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  align="center"
                  gutterBottom
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 900,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} 
                  variant="h6"
                  component="p"
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 400,
                  }}
                >
                  {item.subtitle}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
        {/* <Grid
          style = {{display: 'flex !important'}}
          sx={{
            backgroundImage:
            `url("${coffe}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            '&:after': {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: '100%',
              width: '100%',
              content: '" "',
              zIndex: 1,
              backgroundColor: theme.palette.primary.dark,
              backgroundAttachment: 'fixed',
              opacity: 0.7,
              display: 'flex !important',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
          minHeight={{ xs: 'calc(100vh - 100px)', md: 'calc(100vh - 100px)' }}
          height={'auto'}
          position={'relative'}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            width={'100%'}
            height={'100%'}
            position={{ xs: 'auto', md: 'absolute' }}
            top={{ xs: 0, md: '50%' }}
            sx={{
              transform: { md: 'translateY(-50%)' },
              
            }}
            zIndex={2}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            minHeight={{ xs: 'calc(100vh - 100px)', md: 'calc(100vh - 100px)' }}
          >
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h2"
                align="center"
                gutterBottom
                sx={{
                  color: theme.palette.common.white,
                  fontWeight: 900,
                }}
              >
        Somos tu mejor aliado
              </Typography>
              <Box>
                <Typography
                  variant="h6"
                  component="p"
                  align="center"
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 400,
                  }}
                >
          Sin importar tu sector, nuestro equipo te acompaña durante todo el proceso
                  <br />
          de cobranzas, recuperación de carteras  
                  <br />
          y servicios enfocados en la excelencia de atencion al cliente.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid> */}
        {/* <Box
          minHeight={{ xs: 'calc(100vh - 100px)', md: 'calc(100vh - 100px)' }}

          height={'auto'}
          position={'relative'}
          sx={{
            backgroundImage:
            `url("${office}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            '&:after': {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: '100%',
              width: '100%',
              content: '" "',
              zIndex: 1,
              backgroundColor: theme.palette.primary.dark,
              backgroundAttachment: 'fixed',
              opacity: 0.7,
            },
          }}
        >
          <Box
            position={{ xs: 'auto', md: 'absolute' }}
            top={{ xs: 0, md: '50%' }}
            width={'100%'}
            height={'auto'}
            sx={{
              transform: { md: 'translateY(-50%)' },
            }}
            zIndex={2}
          >
            <Container>
              <Steper2 />
            </Container>
          </Box>
        </Box>
        <Box
          minHeight={{ xs: 'calc(100vh - 100px)', md: 'calc(100vh - 100px)' }}

          height={'auto'}
          position={'relative'}
          sx={{
            backgroundImage:
            `url("${imgCall}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            '&:after': {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: '100%',
              width: '100%',
              content: '" "',
              zIndex: 1,
              backgroundColor: theme.palette.primary.dark,
              backgroundAttachment: 'fixed',
              opacity: 0.7,
            },
          }}
        >
          <Box
            position={{ xs: 'relative', md: 'absolute' }}
            top={{ xs: 0, md: '50%' }}
            width={'100%'}
            height={'auto'}
            sx={{
              transform: { md: 'translateY(-50%)' },
            }}
            zIndex={2}
          >
            <Container>
              <Steper3 />
            </Container>
          </Box>
        </Box>
        <Box
          minHeight={{ xs: 'calc(100vh - 100px)', md: 'calc(100vh - 100px)' }}

          height={'auto'}
          position={'relative'}
          sx={{
            backgroundImage:
            `url("${graph}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            '&:after': {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: '100%',
              width: '100%',
              content: '" "',
              zIndex: 1,
              backgroundColor: theme.palette.primary.dark,
              backgroundAttachment: 'fixed',
              opacity: 0.7,
            },
          }}
        >
          <Box
            position={{ xs: 'relative', md: 'absolute' }}
            top={{ xs: 0, md: '50%' }}
            width={'100%'}
            height={'auto'}
            sx={{
              transform: { md: 'translateY(-50%)' },
            }}
            zIndex={2}
          >
            <Container>
              <Steper4 />
            </Container>
          </Box>
        </Box> */}
        {/* <Box
        >
          <Box
            minHeight={{ xs: 'auto', md: 'calc(100vh - 100px)' }}
            height={'auto'}
            position={'relative'}
            sx= {{
              objectFit: 'cover',
              position: 'fixed',
              zIndex: '-2',
              '&:after': {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100%',
                width: '100%',
                content: '" "',
                zIndex: 1,
                backgroundColor: theme.palette.primary.dark,
                backgroundAttachment: 'fixed',
                opacity: 0.7,
              },
            }}
            zIndex={-2}
            item xs={12} md={8}
          >
            <video
              autoPlay
              loop
              muted
              style= {{ width: '100vw', minHeight: '100%'}}
            >
              <source
                src={video}
                type="video/mp4"
              />
            </video>
          </Box>
          <Container>
            <Steper4 />
          </Container>

        </Box> */}
      </Slider> 
    </Box>
  );
};

Services.propTypes = {
  themeMode: PropTypes.string,
};

export default Services;
/* eslint-disable  no-unused-vars */
