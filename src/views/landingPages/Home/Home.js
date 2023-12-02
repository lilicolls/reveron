import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Features, Footer, Hero, Highlights, About, Numbers, Services, Partners, Process, Brands, Contact } from './components';
import PropTypes from 'prop-types';

const Home = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Highlights />
      </Container>
      <Container>
        <About />
      </Container>
      <Container>
        <Numbers />
      </Container>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container paddingX={'0 !important'} maxWidth={'100%'}>
          <Services themeMode={themeMode} />
        </Container>
      </Box>
      <Container>
        <Partners />
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
      <Container>
        <Brands />
      </Container>
      <Container>
        <Features />
      </Container>
      <Box bgcolor={theme.palette.primary.main}>
        <Container>
          <Contact />
        </Container>
      </Box>
      <Container>
        <Footer />
      </Container>
    </Box>
  );
};

Home.propTypes = {
  themeMode: PropTypes.string,
};

export default Home;
