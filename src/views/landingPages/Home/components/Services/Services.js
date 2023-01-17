/* eslint-disable react/prop-types */
/* eslint-disable  no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import Button from '@mui/material/Button';

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


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style, display: 'block', left: '10px',zIndex: '2' }}
      onClick={onClick}
      zindex={2}
    />
  );
}

const Services = () => {
  const theme = useTheme();

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    lazyLoad: true,
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        <Box
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
            },
          }}
          minHeight={{ xs: 'calc(100vh - 100px)', md: 'calc(100vh - 100px)' }}
          height={'auto'}
          position={'relative'}
        >
          <Box
            width={'100%'}
            height={'auto'}
            position={{ xs: 'auto', md: 'absolute' }}
            top={{ xs: 0, md: '50%' }}
            sx={{
              transform: { md: 'translateY(-50%)' },
            }}
            zIndex={2}
          >
            <Steper />
          </Box>
        </Box>
        <Box
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
        </Box>
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
