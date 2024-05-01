import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SendIcon from '@mui/icons-material/Send';

let img={
    backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtlYmwmbrHK9nk2vGQSbkrR_OP_X7x871CtYQSlnD5g&s')`,
    
    height: "100vh",
    
    
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",


}

const Email = () => {

  const[email,setEmail]=useState("");
  const doc1="https://docs.google.com/document/d/15nq6PJmcIY3jgwPl3BkCMMgmal-pJZGgDGqY46tE9Ew/edit?usp=sharing"
const sendEmail= async(e)=>{
  e.preventDefault();
  const res = await fetch("/mail",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({email})
  });
  console.log(res);
}

  return (
    <div style={img}>
        <div className="container ">
            <div className='d-flex justify-content-center'> 
                 <h3>SENDING MAIL</h3>
                 <img src="https://t4.ftcdn.net/jpg/04/76/40/09/360_F_476400933_A4gKwXtlgQFslfSuDvbV35eQcBIDlYjw.jpg" alt="gmail photo" className='mx-3' style={{width:"50px"}} />
            </div>
            <div className='d-flex justify-content-center'>
            <Form className='mt-2 col-lg-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name='email' onChange={(e)=>{setEmail(e.target.value)}} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>doc link</Form.Label>
        <Form.Control type="email"  name='doc' value={doc1}/>
       
      </Form.Group>
       <Button variant="primary" type="submit" style={{marginLeft:'40%'}} onClick={sendEmail} ><SendIcon/>send Mail
        
      </Button>
    </Form>
            </div>
        </div>
    </div>
  )
}

export default Email
