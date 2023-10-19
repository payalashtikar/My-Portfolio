
import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    console.log(data);
    toast.success('Thanks for submission.');
    // navigate('/');
  };

  return (
    <div>
      <Navbar />
      <React.Fragment>
        <CssBaseline />
        <Link to='/'>
          <ArrowBackIosIcon maxWidth='sm' style={{ width: '25px', cursor: 'pointer', paddingLeft: '10px' }} />
        </Link>
        <Container maxWidth="sm" sx={{ padding: '20px' }}>
          <Box sx={{ background: 'aliceblue', minHeight: '50vh', borderRadius: '10px', padding: '25px', display: 'flex', flexDirection: 'column' }} >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <TextField
                size='small'
                label="Name"
                id="filled-size-normal"
                variant="filled"
                style={{ margin: '15px' }}
                name='name'
                value={data.name || ''}
                onChange={handleInput}
                required
              />
              <TextField
                size='small'
                label="Email"
                id="filled-size-normal"
                variant="filled"
                style={{ margin: '15px' }}
                name='email'
                value={data.email || ''}
                onChange={handleInput}
                required
              />
              <TextField
                size='small'
                label="Message"
                id="filled-size-normal"
                variant="filled"
                style={{ margin: '15px' }}
                name='message'
                value={data.message || ''}
                onChange={handleInput}
                required
              />
            </div>
            <Button variant="outlined" style={{ width: '120px', margin: '15px' }} onClick={handleSubmit}>Submit</Button>
          </Box>
        </Container>
        <ToastContainer />
      </React.Fragment>
    </div>
  );
}
