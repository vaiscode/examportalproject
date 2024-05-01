import React from 'react'
import Ad_nav from './Ad_nav'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, CssBaseline, Grid, Typography } from '@mui/material'

import { Link, Navigate, useNavigate } from 'react-router-dom';



var sectionStyle = {
  backgroundImage: `url('https://e0.pxfuel.com/wallpapers/718/388/desktop-wallpaper-admin-creative-admin-background-full-administrator.jpg')`,

            height: "90vh",
            marginTop: "-70px",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
       

const Admin_dash = () => {

  const navigate = useNavigate();

    const directed = () => {
      navigate('/list');
    };
  
  return (
    <div>
      <Ad_nav/>
    <div style={sectionStyle}>
      
      <div style={{marginLeft:'10%',marginright:'10%',marginTop:'4.5%',marginBottom:'30%'}}>
      <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
                          <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                          <CardMedia
                            component="img"
                            height="175"
                            image="https://media.licdn.com/dms/image/D4D16AQFdJgzrm9Kuuw/profile-displaybackgroundimage-shrink_200_800/0/1695921782566?e=2147483647&v=beta&t=O_4lVRZdYUvTT97ts5vPyfWt7u71YUpeh3aZByQ_9n8"
                            alt="green iguana"
                            onClick={directed}
                           />
                        </CardActionArea>
                      </Card>
        </Grid>
        <Grid item xs={4} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="180"
                              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdHu2R7_nPQC2G4IlUJv2qCJhUT35Gk1b4tD3pWtKUw&s"
                              alt="green iguana"
                              onClick={directed}
                            />
                            
                          </CardActionArea>
                        </Card>
         
        </Grid>
        <Grid item xs={6} md={4}>
                       <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="180"
                              image="https://www.rathinamcollege.edu.in/wp-content/uploads/2020/06/Ai-ml.png"
                              alt="green iguana"
                              onClick={directed}
                            />
                            
                          </CardActionArea>
                        </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="190"
                              image="https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-development.jpeg"
                              alt="green iguana"
                              onClick={directed}
                            />
                            
                          </CardActionArea>
                        </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="190"
                              image="https://www.fitaacademy.in/includes/assets/img/blog/software-testing.jpg"
                              alt="green iguana"
                              onClick={directed}
                            />
                            
                          </CardActionArea>
                        </Card>
        </Grid>
       
      </Grid>
    </Box>
   </div>
 </div>
</div>
)
}

export default Admin_dash
