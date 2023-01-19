/* eslint-disable  no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import WebbeeLogo from 'svg/logos/Webbee';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SidebarNav = ({ pages, onClose }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  const whatsappContact = '+58 414-3200673';
  const whatsappMsg = 'Hola, necesito información';
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box
      display={'flex'} 
      flexDirection={'column'}
      height={'100%'}
    >
      <Box
        display={'flex'} 
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={2}
        p={1}
      >
        <Box
          display={'flex'}
          alignItems="baseline"
          component="a"
          underline="none"
          href="/"
          title="webbee"
          height={{ xs: 28, md: 40 }}
          maxWidth={110}
        >
          <WebbeeLogo />
        </Box>
        <Box
          onClick={() => onClose()}
        >
          <IconButton>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Box
        paddingX={2}
        paddingBottom={2}
        display={'flex'} 
        flexDirection={'column'}
        justifyContent={'space-between'}
        flexGrow={2}
      >
        <Box>
          {pages.map((item, i) => (
            <Box key={i} marginBottom={4}>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: 1,
                  display: 'block',
                }}
                mb={4}
              >
                {item.title}
              </Typography>
              <Grid
                container
                spacing={1}
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                mt={4}
              >
                {item.pages.map((p, i) => (
                  <Grid item xs={6} key={i} mb={2}>
                    <Link
                      variant="body2"
                      component={'a'}
                      href={p.href}
                      color={activeLink === p.href ? 'primary' : 'textPrimary'}
                      underline={'none'}
                      sx={{
                        fontWeight: activeLink === p.href ? 600 : 400,
                        '&:hover': {
                          textDecoration: 'none',
                          color: theme.palette.primary.dark,
                        },
                      }}
                      onClick={() => onClose()}
                    >
                      {p.title}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Box>
        {/* <Box>
          <Button
            variant="outlined"
            fullWidth
            component="a"
            href="/docs-introduction"
          >
            Documentation
          </Button>
        </Box> */}
        <Box marginTop={1}>
          <Box>
            <Box
              display='flex'
              direction="row"
              justifyContent="center"
              alignItems="center"
              marginBottom={2}
            >

              <IconButton 
                aria-label="instagram"
                component="a"
                target="blank"
                href="https://www.instagram.com/amerikservices/"
              >
                <InstagramIcon />
              </IconButton>

              <IconButton 
                aria-label="whatsapp"
                component="a"
                target="blank"
                href={`https://api.whatsapp.com/send?phone=${whatsappContact}&text=${whatsappMsg}`}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              component="a"
              href="/page-contact"
            >
              Contactanos
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
