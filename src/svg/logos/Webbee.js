/* eslint-disable  no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import logoReveron from './img/logoReveron.svg';
import Box from '@mui/material/Box';

const Webbee = ({ width = 45, height = 70 }) => {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  const colorPrimaryDark = theme.palette.primary.main;
  return (
    <Box
      component="img"
      height={'100%'}
      width={'100%'}
      src={logoReveron}
      alt="..."
      sx={{
        filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
      }}
    />
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={width}
    //   height={height}
    //   fill="none"
    //   viewBox="0 0 95 71"
    // >
    //   <rect
    //     width="16.811"
    //     height="68.926"
    //     x="0.664"
    //     y="7.769"
    //     fill={colorPrimaryMain}
    //     stroke={colorPrimaryDark}
    //     rx="8.406"
    //     transform="rotate(-25 .664 7.77)"
    //   ></rect>
    //   <rect
    //     width="16.811"
    //     height="68.926"
    //     x="28.665"
    //     y="7.769"
    //     fill={colorPrimaryMain}
    //     stroke={colorPrimaryDark}
    //     rx="8.406"
    //     transform="rotate(-25 28.665 7.77)"
    //   ></rect>
    //   <rect
    //     width="16.811"
    //     height="16.81"
    //     x="78.769"
    //     y="0.664"
    //     fill={colorPrimaryMain}
    //     stroke={colorPrimaryDark}
    //     rx="8.405"
    //     transform="rotate(25 78.77 .664)"
    //   ></rect>
    // </svg>
  );
};

Webbee.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Webbee;
/* eslint-disable  no-unused-vars */