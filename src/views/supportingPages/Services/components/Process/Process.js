/* eslint-disable  no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { colors } from '@mui/material';
import JoinInnerSharpIcon from '@mui/icons-material/JoinInnerSharp';
import JoinLeftSharpIcon from '@mui/icons-material/JoinLeftSharp';
import JoinRightSharpIcon from '@mui/icons-material/JoinRightSharp';
import { useTheme } from '@mui/material/styles';

const Process = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          What we do
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Nuestros pilares en la operación
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          Since 2007, we have helped 25 companies launch over 1k incredible
          products
        </Typography>
        {/* <Box marginTop={3} display={'flex'} justifyContent={'center'}>
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Contact us
          </Box>
        </Box> */}
      </Box>
      <Grid container spacing={4}  marginTop={3} >
        {[
          {
            title: 'Atención al cliente',
            subtitle:
              'Hacemos llegar la información que requieres transmitir en tiempo y forma, durante todo el ciclo de vida de tu consumidor. Campañas multicanal diseñadas para brindarte el éxito que buscas. Somos la opción ideal para empresas de cualquier giro con cobertura nacional e internacional. Personal altamente capacitado, las mejores herramientas tecnológicas y gran capacidad en infraestructura.',
            icon: (
              <JoinLeftSharpIcon/>
            ),
            color: colors.amber,
          },
          {
            title: 'Servicios de cobranza',
            subtitle:
            'Entendemos que cada caso es distinto. Para realizar un servicio de cobranza. Por ello, manejamos estrategias que se adecuen a las diversas situaciones para lograr la recuperación de cartera, sin afectar la relación con tu cliente. Nuestras soluciones sonideales para actuar en cualquier etapa en la que se encuentre la deuda.',
            icon: (
              <JoinInnerSharpIcon/>
            ),
            color: colors.purple,
          },
          {
            title: 'Telemarketing',
            subtitle:
            'Nuestras soluciones permiten incrementar el alcance de tu marca y llegar a más personas y nuevos mercados. Campañas multicanal diseñadas para brindarte el éxito que buscas. Somos la opción ideal para empresas de cualquier giro con cobertura nacional e internacional. Personal altamente capacitado, las mejores herramientas tecnológicas y gran capacidad en infraestructura.',
            icon: (
              <JoinRightSharpIcon/>
            ),
            color: colors.green,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box color={theme.palette.primary.main}>
              {item.icon}
            </Box>
            <Box
              component={Typography}
              variant={'h6'}
              gutterBottom
              fontWeight={500}
            >
              {item.title}
            </Box>
            <Typography color="text.secondary">{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Process.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Process;
