
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
import E_nav from './E_nav';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';


let imageStyle = {
  
 //  width: "500px",
   backgroundImage:
   'url("https://st.depositphotos.com/1001069/1259/i/450/depositphotos_12595238-stock-photo-nature-blurred-bokeh-background.jpg")',
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   height:'100vh',
 
};



const Student = () =>{
  const location=useLocation();

    const batch=location.state.batch;
    console.log(batch);
    const [rows,setRows]=useState([]);


useEffect(()=>{
  axios.get("http://localhost:3001/api/"+batch).then((res)=>{
setRows(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })

},[]);






  return (
    <div style={imageStyle}>
      <div>
        <E_nav/>
      </div>
       <div >
      <Placeholder as="p" animation="glow"> <h1 style={{marginLeft:'39%'}}>STUDENT LIST</h1>
        <Placeholder sm={12}  />
      </Placeholder>
      </div>
    <div>
 <TableContainer component={Paper} style={{width:'75%',marginLeft:'11%'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>STUDENT NAME</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">PHONE NUMBER</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">PASSWORD</TableCell>
            <TableCell align="right">GENDER</TableCell>
            <TableCell align="right">INTERNAL MARK</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row)=>(
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dob}</TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.mark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
    <div>
    <Button variant="contained" endIcon={<SendIcon />} style={{marginLeft:'45%',marginTop:'5%'}}><Link style={{color:'white',textDecoration:'none'}} to={'/mail'}> Send EMAIL </Link>
 
</Button>&nbsp;&nbsp;&nbsp;&nbsp;
 <Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
  style={{marginLeft:'35%',marginTop:'5%'}}
>
  Upload mark sheet
  <input type="file" />
</Button>
</div>
    </div>
  )
}

export default Student