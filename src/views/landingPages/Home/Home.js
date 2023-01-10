/* eslint-disable  no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { DemoPages, Features, Footer, Hero, Highlights, About } from './components';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <About />
      </Container>
      <Container>
        <Highlights />
      </Container>
      <Container>
        <Features />
      </Container>
      <Container>
        <Footer />
      </Container>
      <br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br>
      
      <br></br>
      <h1> respaldo</h1>
      <br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br>
      
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Highlights />
      </Container>
      <Container>
        <Features />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <h1> test test </h1>
          <DemoPages />
        </Container>
      </Box>
      <Container>
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
