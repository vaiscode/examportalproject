import React, { useState } from 'react';
import { Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Avatar from '@mui/material/Avatar';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    
    imgPath: 'https://drive.google.com/thumbnail?id=1PalNv7fo_pofPssAjPP125gpMkxutE_u&sz=w1280'
  },
  {
    
    imgPath: 'https://drive.google.com/thumbnail?id=1w-5MglZ1kuwXVfeSzalx1pE12y5dvyxH&sz=w1280',
  },
  {
    
    imgPath: 'https://drive.google.com/thumbnail?id=18-BtyaTBNv0PXS3pGC9mBDw6n97GUboK&sz=w1000',
  },
  {
    
    imgPath: 'https://drive.google.com/thumbnail?id=1tYeg5mExDTBR2JETV14AZWaeXIHdbJji&sz=w1000',
  },
];

const SwipeableTextMobileStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{  flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom align='center'>
        NEW COURSES 
        OFFERED  
        FOR YOU  <br/>
      </Typography>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box key={step.label} component="img" src={step.imgPath} alt={step.label} style={{ maxWidth: '100%', height: 'auto' }} />
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      /> */}
    </Box>
  );
};

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));


const Sidebar = () => {
  return (
    <Item style={{ backgroundColor: 'beige'  }}>
      {/* Profile Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        {/* Replace img tag with Avatar */}
        <Avatar src="default-profile-pic.jpg" alt="Profile" style={{ width: 80, height: 80, marginBottom: 10 }} />
        <Typography variant="h6">Amritha</Typography>
      </div>
  
      {/* Batch Section */}
      <Accordion style={{ backgroundColor: 'white', width:'100%' }}>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="batch-content" id="batch-header">
          <Typography>Batch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Batch Information
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Grade Section */}
      <Accordion style={{ backgroundColor: 'white' }}>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="grade-content" id="grade-header">
          <Typography>Grade</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Grade Information 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Item>
  );
};


const ExitTestButton = () => {
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    dob: '',
    batchName: '',
    gender: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExitTestDisabled, setIsExitTestDisabled] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleExitTest = () => {
    if (isExitTestDisabled) {
      alert('Form has already been submitted.');
    } else {
      setShowConfirmationDialog(true);
    }
  };

  const handleConfirmExit = () => {
    setShowConfirmationDialog(false);
    setShowForm(true);
  };

  const handleCloseConfirmationDialog = () => {
    setShowConfirmationDialog(false);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmitForm = async () => {
    // Validate form data before submission
    if (!isFormDataValid(formData)) {
      console.log('Form data is incomplete or invalid. Please check all fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      // Simulate form submission (replace with actual backend API call)
      console.log('Form data submitted:', formData);
      // Reset form data
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        dob: '',
        batchName: '',
        gender: '',
      });
      setIsExitTestDisabled(true);
      setShowSnackbar(true); // Show Snackbar upon successful form submission
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      setShowForm(false);
    }
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const isFormDataValid = (formData) => {
    const { name, phoneNumber, email, dob, batchName, gender } = formData;
    return name && phoneNumber && email && dob && batchName && gender;
  };

  return (
    <div align='center'>
      <Typography variant="h6" gutterBottom>
        Ready to take Exit Examination? Click here to Register !
      </Typography>
      <Button
        onClick={handleExitTest}
        color="primary"
        variant="contained"
        disabled={isExitTestDisabled}
      >
        Register
      </Button>

      <Dialog open={showConfirmationDialog} onClose={handleCloseConfirmationDialog}>
        <DialogTitle>Exit Test Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmationDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmExit} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={showForm} onClose={() => setShowForm(false)}>
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={formData.name}
            onChange={handleInputChange('name')}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange('phoneNumber')}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Email"
            value={formData.email}
            onChange={handleInputChange('email')}
            fullWidth
            margin="dense"
          />
          <TextField
            label="DOB"
            type="date"
            value={formData.dob}
            onChange={handleInputChange('dob')}
            fullWidth
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Batch Name</InputLabel>
            <Select
              value={formData.batchName}
              onChange={handleInputChange('batchName')}
            >
              {['KKEM March CSA', 'KKEM March DSA', 'KKEM March MLAI', 'KKEM March FSD', 'KKEM March ST'].map((batch) => (
                <MenuItem key={batch} value={batch}>
                  {batch}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Gender</InputLabel>
            <Select
              value={formData.gender}
              onChange={handleInputChange('gender')}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmitForm} color="primary" disabled={isSubmitting}>
            Submit
          </Button>
          <Button onClick={() => setShowForm(false)} color="primary" disabled={isSubmitting}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar to display form submission confirmation */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000} // Duration to show the Snackbar (3 seconds)
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Position Snackbar at the top center
      >
        <Box sx={{ width: '100%' }}> {/* Adjust the width as needed */}
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{
              borderRadius: '8px', //Rounded corners
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', //Box shadow
              padding: '20px', //Increased padding
              fontSize: '1rem', // Font size
            }}
          >
            <h4>Form submitted successfully!</h4>
          </Alert>
        </Box>
      </Snackbar>
    </div>
  );
};






const StudentDashboard = () => {
        return (
    
<Box sx={{  backgroundColor: 'beige' ,}}>
      <Grid container spacing={0}>
        {/* Sidebar Grid Item (Extra Small: 12 columns, Small: 4 columns, Medium: 3 columns) */}
        <Grid item sm={12} md={6}>
          <Box sx={{backgroundColor: 'beige', padding: '20px', borderRadius: '12px'}}>
            {/* Sidebar content */}
            <Sidebar />
          
           <br />
           <br />
           <br />
        {/* Main Content Grid Item (Extra Small: 12 columns, Small: 8 columns, Medium: 6 columns) */}
        {/* <Grid item xs={12} sm={8} md={6}>
          <Box sx={{ height:'8cm',backgroundColor: 'beige', padding: '20px', borderRadius: '12px', borderRight: '2px solid black' }}> */}
            {/* Main content */}
            <ExitTestButton />
          </Box>
        </Grid>
        {/* </Box>
        </Grid> */}
      
       {/* Carousel Grid Item (Extra Small: 12 columns, Medium: 3 columns) */}
       <Grid item xs={12} md={6}>
          <Box sx={{height:'10cm', padding: '10px',}}>
            {/* Carousel component */}
            <SwipeableTextMobileStepper />

          </Box>
        </Grid>

        
        

        {/* Footer Grid Item (Extra Small: 12 columns) */}
        <Grid item xs={12}>
          <Box sx={{marginTop:'5em', bgcolor: 'grey', color: 'white', textAlign: 'center', py: 2 }}>
            {/* Footer content */}
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Grid container justifyContent="center" spacing={4}>
              {/* Headquarters */}
              <Grid item>
                <Typography variant="body1">
                  <strong>Headquarters:</strong><br />
                  <h5>G1, Ground Floor, Thejaswini, Technopark Campus<br />
                  Thiruvananthapuram, Kerala, India - 695 581</h5>
                </Typography>
              </Grid>

              {/* Regional Centre (North) */}
              <Grid item>
                <Typography variant="body1">
                  <strong>Regional Centre (North):</strong><br />
                 <h5> 2nd Floor, UL Cyberpark Building, Nellikode Post<br />
                  Kozhikode, Kerala, India - 673 016</h5>
                </Typography>
              </Grid>

              {/* Regional Centre (Central) */}
              <Grid item>
                <Typography variant="body1">
                  <strong>Regional Centre (Central):</strong><br />
                  <h5>B-Wing, Kanikonna Villa, Infopark Campus<br />
                  Koratty, Thrissur, Kerala, India - 680 308</h5>
                </Typography>
              </Grid>
            </Grid>

            {/* Copyright Section */}
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
              &copy; {new Date().getFullYear()} ICTAK. All rights reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentDashboard;




