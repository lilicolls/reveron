/* eslint-disable  no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from 'common/Container';
import { Gallery, Headline, Numbers, Story, Team, Process } from './components';

// eslint-disable-next-line react/prop-types
const About = ({ themeMode = 'light' }) => {
  return (
    <Box>
      <Container>
        <Headline />
      </Container>
      <Container paddingY={'0 !important'}>
        <Gallery />
      </Container>
      <Container maxWidth={'800px !important'} paddingBottom={'0 !important'}>
        <Numbers />
        <Container>
          <Divider />
        </Container>
      </Container>
      <Container paddingY={'0 !important'}>
        <Story />
        <Container>
          <Divider />
        </Container>
      </Container>
      <Container>
        <Process themeMode={themeMode} />
      </Container>
      {/* <Container paddingTop={'0 !important'}>
        <Team />
      </Container> */}
    </Box>
  );
};

export default About;
/* eslint-disable  no-unused-vars */
