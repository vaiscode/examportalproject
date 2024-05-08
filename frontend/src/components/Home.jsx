import React from 'react';
import {Carousel, Col, Container, Navbar, Row, Stack,} from 'react-bootstrap';
import {Button, Typography} from '@mui/material';
import '../Home.css'
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import { Link } from 'react-router-dom';




const Home = () => {    


  return (
    <>
    <section sm={12}>
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img5}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
   </section>

    <section className='title'>
        <Container>
          <Row>
            <Col sm={12}>
              <Typography variant='h3' textAlign={'center'} fontWeight={700} marginTop={4} color={'white'}>
                Welcome to ICTAK Exam Registration Portal</Typography>
            </Col>
          </Row>
          </Container>
      </section>
      <section className='login' >
        <Container>
      <Stack direction="horizontal" gap={3}>
      <div className="p-2">
        <img src={img6} alt=".." width={550}/>
      </div>
      <div className="p-2 ms-auto">
        <p id='para'>Login with your PAATSHALA credentials and complete Exit Exam Registration</p>
        <div className="p-2 ms-auto">
      <Button variant="contained"><Link to={'/l'}  style={{textDecoration:'none',color:'white'}}>Login</Link></Button>
      </div>
      </div>  
    </Stack>
    </Container>
    </section>
   
    <footer>
    <Navbar className='footer'>
      <Container>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>
            Copyright @2024
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </footer>
    </>
  )
}

export default Home
