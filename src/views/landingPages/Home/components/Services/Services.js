/* eslint-disable  no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { colors } from '@mui/material';
import Container from 'common/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import RocketIllustration from 'svg/illustrations/Rocket';
import {
  Steper
} from '../../components';
import img from './img/img-1.jpg';

const Services = () => {
  const themeMode = 'light';
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  // const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
  //   defaultMatches: true,
  // });
  // const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
  //   defaultMatches: true,
  // });
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });
  // const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
  //   defaultMatches: true,
  // });

  // let slidesToShow = 1;
  // if (isXs) {
  //   slidesToShow = 1;
  // }
  // if (isSm) {
  //   slidesToShow = 2;
  // }
  // if (isMd) {
  //   slidesToShow = 3;
  // }
  // if (isLg) {
  //   slidesToShow = 4;
  // }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...sliderOpts} minHeight={{ xs: 'auto', md: 'calc(100vh - 64px)' }} >
      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
      <Box
        minHeight={{ xs: 'auto', md: 'calc(100vh - 100px)' }}

        height={'auto'}
        position={'relative'}
        sx={{
          backgroundImage:
            'url("https://assets.maccarianagency.com/backgrounds/img22.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
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
            opacity: 0.3,
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
            <Steper />
          </Container>
        </Box>
      </Box>
      <Box
        minHeight={{ xs: 'auto', md: 'calc(100vh - 100px)' }}

        height={'auto'}
        position={'relative'}
        sx={{
          backgroundImage:
            'url("https://assets.maccarianagency.com/backgrounds/img19.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
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
            opacity: 0.3,
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
            <Steper />
          </Container>
        </Box>
      </Box>

      <Box
        minHeight={{ xs: 'auto', md: 'calc(100vh - 100px)' }}

        height={'auto'}
        position={'relative'}
        sx={{
          backgroundImage:
            'url("https://assets.maccarianagency.com/backgrounds/img2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
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
            opacity: 0.3,
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
            <Steper />
          </Container>
        </Box>
      </Box>
      <Box
        minHeight={{ xs: 'auto', md: 'calc(100vh - 100px)' }}
        height={'auto'}
        position={'relative'}
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundAttachment: 'fixed',
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
            opacity: 0,
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
            <Steper />
          </Container>
        </Box>
      </Box>
      <Box
      >
        <Box
          sx= {{
            objectFit: 'cover',
            position: 'fixed',
            zIndex: '-2'
          }}
          zIndex={-2}
        >
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
            
          >
            <source
              src="https://statics.globant.com/production/public/2022-11/Meet%20the%20future.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
        <h1
        > texto loco</h1>

      </Box>
    </Slider>
  );
};

Services.propTypes = {
  themeMode: PropTypes.string,
};

export default Services;
/* eslint-disable  no-unused-vars */
