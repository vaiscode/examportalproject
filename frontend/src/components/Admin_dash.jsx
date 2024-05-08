import React, { useEffect, useState } from 'react'
import Ad_nav from './Ad_nav'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, CssBaseline, Grid, Typography } from '@mui/material'

import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';




       

const Admin_dash = () => {


  // const [rows,setRows] = useState();

  //                   useEffect(()=>{
  //                     axios.get("http://localhost:3001/api/view").then((res)=>{
  //                   setRows(res.data);
  //                     })
  //                     .catch((err)=>{
  //                       console.log(err);
  //                     })

  //                   },[]);

  const navigate = useNavigate();
  
                  const directed = (batch) => {
                    const b=batch;
                    // console.log(b);
                  
                    
                    // console.log(batch);
                    navigate('/list',{state:{batch:b}});
                  };
  
  return (
    <div>
      <Ad_nav/> 
    <div style={{backgroundColor:'beige'}}>
    
      <div style={{marginLeft:'10%',marginright:'10%',marginTop:'1%'}}>
      {/* {rows.map((val)=>( */}
      <Box >  
       
      <Grid container spacing={4} >
      
        <Grid item xs={12} sm={6} md={4}>
                          <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                          <CardMedia
                            component="img"
                            height="175"
                            image="https://media.licdn.com/dms/image/D4D16AQFdJgzrm9Kuuw/profile-displaybackgroundimage-shrink_200_800/0/1695921782566?e=2147483647&v=beta&t=O_4lVRZdYUvTT97ts5vPyfWt7u71YUpeh3aZByQ_9n8"
                            alt="green iguana"
                            value="KKEM March CSA"
                            onClick={()=>{directed("KKEM March CSA")}}
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
                              onClick={()=>directed("KKEM March DSA")}
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
                              onClick={()=>directed("KKEM March MLAI")}
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
                              onClick={()=>directed("KKEM March FSD")}
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
                              onClick={()=>directed("KKEM March ST")}
                            />
                            
                          </CardActionArea>
                        </Card>
        </Grid>
     
      </Grid>
      </Box>
      </div>
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
      
     
       {/* ))} */}
     
    
 </div>
</div>
)
}

export default Admin_dash
