/* eslint-disable  no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import {
  Contact,
  Hero,
  Process,
  Reviews,
  SeenOn,
  WhatWeDo,
} from './components';
// import { Partners } from '../../../../landingPages/Home/components';
import { Partners } from '../../landingPages/Home/components';
import audio from './components/img/audio.jpg';


const Services = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Container>
        <Hero />
      </Container>
      <Container>
        <WhatWeDo />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Partners />
        </Container>
      </Box>
      <Container>
        <Process themeMode={themeMode} />
      </Container>
      <Box bgcolor={theme.palette.alternate.main} sx={{ padding: isSm? 6: 0}} position={'relative'} >
        <Container
          sx={{
            backgroundImage: `url("${audio}")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            '&:after': {
              opacity:'0.2',
              position: 'absolute',
              zIndex: 1,
            }
          }}
          borderRadius={isSm ? 4 : 0}
          
        >
          <Reviews />
      
        </Container>

      </Box>
      <Container>
        <Contact />
      </Container>
    </Box>
  );
};

Services.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Services;
