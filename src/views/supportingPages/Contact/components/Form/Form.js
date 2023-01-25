/* eslint-disable react/no-unescaped-entities */
/* eslint-disable  no-unused-vars */
import React, {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Chip from '@mui/material/Chip';

const Form = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [activeCategory, setActiveCategory] = useState('deal');

  const updateCategory = (e) => {
    console.log('update form', e);
    setActiveCategory(e);
  };

  //category could be, suggestions, job, deal
  return (
    <Box>
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={'100%'}
        component={Card}
        borderRadius={2}
        boxShadow={4}
        marginBottom={4}
      >
        <form noValidate autoComplete="off">
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} sm={12} display='flex' columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item >
                <Chip
                  variant={activeCategory === 'deal'? 'filled' : 'outlined'}
                  color="primary"
                  size="medium"
                  value="deal"
                  label= "Contacto comercial"
                  onClick={(e) => updateCategory('deal')}
                  clickable
                >
                </Chip>
              </Grid>
              <Grid item >
                <Chip
                  variant={activeCategory === 'suggestions'? 'filled' : 'outlined'}
                  color="primary"
                  size="medium"
                  value="suggestions"
                  label= " Sugerencias o reclamos"
                  onClick={(e) => updateCategory('suggestions')}
                  clickable
                >
                </Chip>
              </Grid>
              <Grid item > 
                <Chip
                  variant={activeCategory === 'work'? 'filled' : 'outlined'}
                  color="primary"
                  size="medium"
                  value="work"
                  onClick={(e) => updateCategory('work')}
                  label="Trabaja con nosotros"
                  clickable
                >
                </Chip>

              </Grid>
              

            </Grid>
            <Grid item xs={12} sm={12}>
              {activeCategory === 'suggestions' && (
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Cliente" />
                    <FormControlLabel value="male" control={<Radio />} label="Cliente potencial" />
                    <FormControlLabel value="other" control={<Radio />} label="Otro" />
                  </RadioGroup>
                </FormControl> 
              )}
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="First name"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Last name"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
              
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                sx={{ height: 54 }}
                label="phone"
                type="phone"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                sx={{ height: 54 }}
                label="country"
                type="text"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                sx={{ height: 54 }}
                label="Company"
                type="text"
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Grid>


            {activeCategory === 'deal' && (
              <Grid item xs={12} sm={4}>
                <TextField
                  sx={{ height: 54 }}
                  label="Company size"
                  type="text"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  fullWidth
                />
              </Grid>
                
            )}

            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ height: 54 }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  By clicking on "submit" you agree to our{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Privacy Policy
                  </Box>
                  ,{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Data Policy
                  </Box>{' '}
                  and{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Cookie Policy
                  </Box>
                  .
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box>
        <Typography color="text.secondary" align={'center'}>
          We'll get back to you in 1-2 business days.
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;
