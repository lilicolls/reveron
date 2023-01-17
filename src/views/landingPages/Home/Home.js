/* eslint-disable  no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { DemoPages, Features, Footer, Hero, Highlights,
  About, Services, Contact, Numbers, Partners, Carusel, Process, WhyUs } from './components';

// eslint-disable-next-line react/prop-types
const Home = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  return (
    <Box>
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
      <Container paddingBottom={'0 !important'}>
        <WhyUs />
      </Container>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Process themeMode={themeMode} />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>
      {/* <Container>
        <Features />
      </Container> */}
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
