/* eslint-disable  no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { DemoPages, Features, Footer, Hero, Highlights,
  About, Services, Contact, Numbers, Partners, Carusel } from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      {/* <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box> */}
      <Box bgcolor={theme.palette.alternate.light} position={'relative'}>
        <Container position="relative" zIndex={2} maxWidth={'100%'} paddingTop={'0 !important'}
          paddingLeft={'0 !important'} paddingRight={'0 !important'}
        >
          <Carusel />
        </Container>
      </Box>
      <Container>
        <About />
      </Container>
      <Container>
        <Numbers />
      </Container>
      <Container>
        <Services />
      </Container>
      <Container>
        <Partners />
      </Container>
      <Container>
        <Features />
      </Container>
      <Container>
        <Footer />
      </Container>
      <Box bgcolor={theme.palette.primary.main}>
        <Container>
          <Contact />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
