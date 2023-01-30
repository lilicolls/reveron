/* eslint-disable  no-unused-vars */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Faq, Partners, Hero, 
  PricingCompareTable, Features, Details,
  Title
} from './components';

const Pricing = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position={'relative'} zIndex={2}>
          <Hero />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
            zIndex: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Container>
        <Features />
      </Container>
      <Container>
        <Title />
      </Container>
      <Container>
        <Details />
      </Container>

      {/* <Container maxWidth={1100}>
        <PricingCompareTable />
      </Container>
      <Container>
        <Faq />
      </Container> */}
    </Box>
  );
};

export default Pricing;
