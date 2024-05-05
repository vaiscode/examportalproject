import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const tokenrelease =()=>{
    sessionStorage.removeItem('studentToken');
    sessionStorage.removeItem('adminToken');
  }

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static" color='info'>
           <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             ICTAK Exam Registration Portal
            </Typography>
            <Button color="inherit"><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link></Button>
            <Button color="inherit"><Link to={''} style={{textDecoration:'none',color:'white'}}>Contact Us</Link></Button>
            <Button color="inherit" onClick={tokenrelease}><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Logout</Link></Button>
           </Toolbar>
          </AppBar>
      </Box>
    </div>
  )
}

export default Navbar