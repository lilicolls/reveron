/* eslint-disable  no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Map, Form, Faq } from './components';
import Container from 'common/Container';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import building from './components/img/building.jpeg';
import building2 from './components/img/building2.jpeg';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const Contact = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Container>
        <Grid>
          <Grid container spacing={isMd ? 8 : 4} display='flex' flexDirection={'column'}>
            <Grid
              item
            >
              <Box>
                <Box>
                  <Typography
                    sx={{
                      textTransform: 'uppercase',
                      fontWeight: 'medium',
                    }}
                    gutterBottom
                    color={'textSecondary'}
                  >
        Contact us
                  </Typography>
                  <Box marginBottom={2}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
          Get in touch
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" color={'textSecondary'}>
        Nos encantaría hablar en como podemos ayudarte
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item  xs={12} md={12} display='flex' flexDirection={'row'} spacing={2}>
              
              <Grid item xs={12} md={8}>
                <Form />
              </Grid>
              <Grid item xs={12} md={4} sx={{ padding: '0px 20px 20px 20px'}}>
                <Box component={Card} boxShadow={4} height={'100%'} width={'100%'}>
                  <Box
                    component={CardMedia}
                    height={'100%'}
                    width={'100%'}
                    // minHeight={300}
                    image={building2}
                    sx={{
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                  />
                </Box>
              </Grid>
            
            </Grid>
          
            
          </Grid>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Map themeMode={themeMode} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container maxWidth={800}>
          <Faq />
        </Container>
      </Box>
    </Box>
  );
};

Contact.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Contact;
