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
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string('Enter your last name')
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string('Enter your email')
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
});

const Form = () => {
  const theme = useTheme();
  const form = useRef();
  const ref = useRef();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [activeCategory, setActiveCategory] = useState('deal');
  const [groupRadioPicked, setGroupRadioPicked] = useState('');
  const [open, setOpen] = useState(false);
  const [severityAlert, setSeverityAlert] = useState('success');
  const [alertText,  setAlertText] = useState('');
  const [file, setFile] = useState();

  const handleUploadFile = () => {
    console.log('se sube');
  };
  

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    groupRadioPicked: '',
    file: '',
  };

  const updateCategory = (e) => {
    console.log('update form', e);
    setActiveCategory(e);
  };

  const handleGroupRadioPicked = (e) => {
    console.log('radio update', e);
    setGroupRadioPicked(e.target.value);
  };

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }
    console.log('se sube', e.target.files);

    setFile(e.target.files[0]);

    // 🚩 do the file upload here normally...
  };

  const sendEmail = (values) => {

    emailjs.send('service_502tik2', 'template_95spgr5', values, 'qsrqd1t7JVtE5bpaY')
      .then((result) => {
        setOpen(true);
        setSeverityAlert('success');
        setAlertText('Tu mail fue enviaddo con exito');
        formik.resetForm();
      }, (error) => {
        setOpen(true);
        setSeverityAlert('error');
        setAlertText('Hubo un error en el envio del mail');
      });
  };

  const getEmailSubject = (category) => {
    switch(category) {
      case 'deal':
        return 'contacto comercial';
      case 'work':
        return 'Trabajar con nosotros';
      default:
        return 'sugerencias o reclamos';
    }
  };

  const onSubmit = (values) => {

    const emailSubject = getEmailSubject(activeCategory);

    const company = values.company === ''? 'no proporcionada': values.company;
    
    
    const objectToEmail = { ...values, 
      category: activeCategory,
      radio: groupRadioPicked,
      emailSubject,
      company,
      file
    };
    console.log('objectToEmail', objectToEmail);

    sendEmail(objectToEmail);
    return objectToEmail;
  };


  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });
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
        <form autoComplete="off" values={initialValues} onSubmit={formik.handleSubmit} innerRef={form}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} sm={12}>
              <Collapse in={open}>
                <Alert
                  severity={severityAlert}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  {alertText}
                </Alert>
              </Collapse>
            </Grid>
            <Box>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Dinos como podemos ayudarte
              </Typography>
            </Box>
            <Grid container xs={12} sm={12} display='flex' spacing={2} paddingLeft={4}>
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
                <FormControl onChange={(e)=>handleGroupRadioPicked(e)}>
                  <FormLabel id="demo-row-radio-buttons-group-label">texto</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel 
                      value="Cliente" 
                      control={<Radio />} 
                      label="Cliente" 
                      name={'groupRadioPicked'}
                    />
                    <FormControlLabel 
                      value="Cliente potencial" 
                      control={<Radio />} 
                      label="Cliente potencial" 
                      name={'groupRadioPicked'}  
                    />
                    <FormControlLabel 
                      value="otro"
                      control={<Radio />} 
                      label="Otro" 
                      name={'groupRadioPicked'}
                    />
                  </RadioGroup>
                </FormControl>  
 
              )}
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Enter your first name
              </Typography>
              <TextField
                label="First name *"
                variant="outlined"
                name={'firstName'}
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Enter your last name
              </Typography>
              <TextField
                label="Last name *"
                variant="outlined"
                name={'lastName'}
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Enter your email
              </Typography>
              <TextField
                label="Email *"
                variant="outlined"
                name={'email'}
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Enter your phone
              </Typography>
              <TextField
                label="Phonel *"
                variant="outlined"
                name={'phone'}
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>

            {activeCategory !== 'work' && <Grid item xs={12} sm={4}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Enter your company
              </Typography>
              <TextField
                label="Company *"
                variant="outlined"
                name={'company'}
                fullWidth
                value={formik.values.company}
                onChange={formik.handleChange}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
              />
            </Grid>}

            {/* {activeCategory === 'work' && <Grid item xs={12} sm={4}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Sube tu cv
              </Typography>

              
              <Button variant="contained" component="label">
              Upload
                <input hidden 
                  accept="image/*"
                  multiple type="file" 
                  onChange={(e)=> handleFileChange(e)}    
                  name={'file'}   
                />
              </Button>
            </Grid>} */}
          

            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                name={'message'}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ height: 54 }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                type={'submit'}
                disabled={!(formik.isValid && formik.dirty)}
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
