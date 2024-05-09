import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, TextField, FormControl, InputLabel, Select, MenuItem, Snackbar, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Avatar from '@mui/material/Avatar';
import { Alert } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

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
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom align='center'>
        NEW COURSES OFFERED FOR YOU <br/>
      </Typography>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box key={index} component="img" src={step.imgPath} alt={`Step ${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
        ))}
      </AutoPlaySwipeableViews>
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

  const location = useLocation();
 const email = location.state.email;
  const [userData, setUserData] = useState({ name: '', batch: '', mark: '' });

  useEffect(() => {
    // Fetch user data from the backend when the component mounts
    const fetchUserData = async () => {
      try {
        const token = sessionStorage.getItem('studenttoken');
        const response = await axios.get('http://localhost:3001/api/student/'+email, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data.student);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Item style={{ backgroundColor: 'beige', padding: '20px' }}>
      {/* Display student's name */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <Avatar src="default-profile-pic.jpg" alt="Profile" style={{ width: 80, height: 80, marginBottom: 10 }} />
        <Typography variant="h6">{userData.name}</Typography>
      </div>
      {/* Table container with white background */}
      <TableContainer component={Paper} style={{ backgroundColor: 'white' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Batch Name</TableCell>
              <TableCell>Mark</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{userData.batchName}</TableCell>
              <TableCell>{userData.mark}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
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
    if (!isFormDataValid(formData)) {
      console.log('Form data is incomplete or invalid. Please check all fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      console.log('Form data submitted:', formData);
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        dob: '',
        batchName: '',
        gender: '',
      });
      setIsExitTestDisabled(true);
      setShowSnackbar(true);
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
      <Button onClick={handleExitTest} color="primary" variant="contained" disabled={isExitTestDisabled}>
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
          <Button onClick={handleCloseConfirmationDialog} color="primary">Cancel</Button>
          <Button onClick={handleConfirmExit} color="primary">Ok</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={showForm} onClose={() => setShowForm(false)}>
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
          <TextField label="Name" value={formData.name} onChange={handleInputChange('name')} fullWidth margin="dense" />
          <TextField label="Phone Number" value={formData.phoneNumber} onChange={handleInputChange('phoneNumber')} fullWidth margin="dense" />
          <TextField label="Email" value={formData.email} onChange={handleInputChange('email')} fullWidth margin="dense" />
          <TextField label="DOB" type="date" value={formData.dob} onChange={handleInputChange('dob')} fullWidth margin="dense" InputLabelProps={{ shrink: true }} />
          <FormControl fullWidth margin="dense">
            <InputLabel>Batch Name</InputLabel>
            <Select value={formData.batchName} onChange={handleInputChange('batchName')}>
              {['KKEM March CSA', 'KKEM March DSA', 'KKEM March MLAI', 'KKEM March FSD', 'KKEM March ST'].map((batch) => (
                <MenuItem key={batch} value={batch}>{batch}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Gender</InputLabel>
            <Select value={formData.gender} onChange={handleInputChange('gender')}>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmitForm} color="primary" disabled={isSubmitting}>Submit</Button>
          <Button onClick={() => setShowForm(false)} color="primary" disabled={isSubmitting}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={showSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Box sx={{ width: '100%' }}>
          <Alert onClose={handleSnackbarClose} severity="success" sx={{ borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', padding: '20px', fontSize: '1rem' }}>
            <h4>Form submitted successfully!</h4>
          </Alert>
        </Box>
      </Snackbar>
    </div>
  );
};

const StudentDashboard = () => {
  return (
    <Box sx={{ backgroundColor: 'beige' }}>
      <Grid container spacing={0}>
        <Grid item sm={12} md={6}>
          <Box sx={{ backgroundColor: 'beige', padding: '20px', borderRadius: '12px' }}>
            <Sidebar />
            <br />
            <br />
            <br />
            <ExitTestButton />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ height:'10cm', padding: '10px' }}>
            <SwipeableTextMobileStepper />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ marginTop:'5em', bgcolor: 'grey', color: 'white', textAlign: 'center', py: 2 }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Grid container justifyContent="center" spacing={4}>
              <Grid item>
                <Typography variant="body1">
                  <strong>Headquarters:</strong><br />
                  <h5>G1, Ground Floor, Thejaswini, Technopark Campus<br />
                  Thiruvananthapuram, Kerala, India - 695 581</h5>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <strong>Regional Centre (North):</strong><br />
                 <h5> 2nd Floor, UL Cyberpark Building, Nellikode Post<br />
                  Kozhikode, Kerala, India - 673 016</h5>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <strong>Regional Centre (Central):</strong><br />
                  <h5>B-Wing, Kanikonna Villa, Infopark Campus<br />
                  Koratty, Thrissur, Kerala, India - 680 308</h5>
                </Typography>
              </Grid>
            </Grid>
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
