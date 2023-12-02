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
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { colors } from '@mui/material';

const SidebarNav = ({ pages, onClose }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box 
      display={'flex'}
      justifyContent={'space-between'}
      flexDirection={'column'}
      height={'100%'}
    >
      <Box
        display={'flex'}
        justifyContent={'flex-end'}
        onClick={() => onClose()}
      >
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2}
        flexGrow={1}
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
              >
                {item.title}
              </Typography>
              <Grid container spacing={1}>
                {item.pages.map((p, i) => (
                  <Grid item xs={6} md={12} key={i}>
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
      </Box>
      <Box paddingBottom={2}> 
        <Box marginTop={4} marginBottom={1}
          display={'flex'}
          justifyContent={'center'}
        >
          <IconButton
            size={'small'}
            sx={{
              marginRight: 1,
              color: colors.blueGrey[200],
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            size={'small'}
            sx={{
              color: colors.blueGrey[200],
            }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            size={'small'}
            sx={{
              color: colors.blueGrey[200],
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://material-ui.com/store/items/webbee-landing-page/"
          >
            Contactanos
          </Button>
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
