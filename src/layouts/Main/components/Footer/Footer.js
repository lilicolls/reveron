/* eslint-disable  no-unused-vars */
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import WebbeeLogo from 'svg/logos/Webbee';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme, alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

const Footer = () => {
  const theme = useTheme();
  const whatsappContact = '+58 414-3200673';
  const whatsappMsg = 'Hola, necesito información';
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} paddingTop={'0 !important'}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={'100%'}
          flexDirection={{ xs: 'column', sm: 'row' }}
          marginBottom={2}
        >
          <Box
            display={'flex'}
            component="a"
            underline="none"
            href="/"
            title="webbee"
            height={40}
            width={150}
          >
            <WebbeeLogo height={'100%'} width={'100%'} />

          </Box>
          <Box
            display='flex'
            direction="row"
            justifyContent="center"
            alignItems="center"
          >


            <Box
              component={Avatar}
              variant="rounded"
              width={35}
              height={35}
              bgcolor={alpha(theme.palette.primary.main, 0.1)}
              borderRadius={5}
              marginRight={2}
            >
   
              <IconButton 
                aria-label="instagram"
                component="a"
                target="blank"
                href="https://www.instagram.com/amerikservices/"
                
              >
                <InstagramIcon sx={{ color: theme.palette.primary.main }}/>
              </IconButton>



            </Box>

            
            <Box
              component={Avatar}
              variant="rounded"
              width={35}
              height={35}
              bgcolor={alpha(theme.palette.primary.main, 0.1)}
              borderRadius={5}
              marginRight={2}
            >
              <IconButton 
                aria-label="whatsapp"
                component="a"
                target="blank"
                href={`https://api.whatsapp.com/send?phone=${whatsappContact}&text=${whatsappMsg}`}
              >
                <WhatsAppIcon   sx={{ color: theme.palette.primary.main }}/>
              </IconButton>
            </Box>
            <Box
              component={Avatar}
              variant="rounded"
              width={35}
              height={35}
              bgcolor={alpha(theme.palette.primary.main, 0.1)}
              borderRadius={5}
            >
              <IconButton 
                aria-label="mail"
                component="a"
                href="mailto:reveronsc@gruporeveron.com?Subject=Informacion%20General"
              >
                <EmailIcon  sx={{ color: theme.palette.primary.main }}/>
              </IconButton>
            </Box>
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="/page-services"
                size="small"
              >
                Conoce nuestros servicios
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} paddingTop={'0 !important'}>
        {/* <Box
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
          <IconButton 
            aria-label="mail"
            component="a"
            href="mailto:reveronsc@gruporeveron.com?Subject=Informacion%20General"
          >
            <EmailIcon />
          </IconButton>
        </Box> */}
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="textSecondary"

        >
        Reverón & Asociados 2023 
        </Typography>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="textSecondary"
          marginBottom={1}
        >
        Todos los derechos reservados&copy; 
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="textSecondary"
          component={'p'}
        >
          Avenida Francisco de Miranda, Edificio Roraima, Piso 4, Oficina 4-F. Campo Alegre, Caracas - Venezuela.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
