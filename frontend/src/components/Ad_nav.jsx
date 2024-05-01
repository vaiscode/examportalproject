import React from 'react'
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'

const Ad_nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
    <AppBar style={{backgroundColor:'black'}} position="static" >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>DASHBOARD</Typography>
        <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}} to={'/'}>Logout</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
);
  
}

export default Ad_nav