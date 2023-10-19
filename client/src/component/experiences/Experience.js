import React from 'react'
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from '../navbar/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import sphinxlogoimg from '../assets/logo.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

export default function Experience() {
  return (
    <div>
      <Navbar />
      <React.Fragment>
        <Link to='/'>
          <ArrowBackIosIcon maxWidth='sm' style={{ width: '25px', cursor: 'pointer', paddingLeft: '10px' }} />
        </Link>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ padding: '20px', }}>
          <Box sx={{ background: 'aliceblue', minHeight: '100vh', borderRadius: '10px', padding: '25px', display: 'flex', flexDirection: 'column' }} >
            <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Junior Software Engineer
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    SPHINX WORLDBIZ LIMITED
                  </Typography>
                  <Box sx={{ marginBottom: 0, marginTop: '10px' }}>
                    <Typography color="text.secondary" component='div' sx={{ fontSize: 'small' }}>Noida , sector-16</Typography>
                    <Typography color="text.secondary" component='div' sx={{ fontSize: 'small' }}>6/2022 - 6/2023</Typography>
                  </Box>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 130 }}
                image={sphinxlogoimg}
                alt="Live from space album cover"
              />
            </Card>
            <Box sx={{ marginTop: '20px' }}>
              <Typography color="text.secondary" sx={{ fontSize: 'small' }}>Task/Responsibility</Typography>
              <li style={{ display: 'flex', margin: '10px' }}>
                <div style={{ background: 'black', width: '8px', height: '6px', margin: '5px', marginRight: '10px' }}></div>
                <Typography component="div" sx={{ fontSize: 'small' }}>
                  Developed dynamic frontend UI using ReactJS, NodeJS, and MongoDB for web applications.
                </Typography>
              </li>
              <li style={{ display: 'flex', margin: '10px' }}>
                <div style={{ background: 'black', width: '8px', height: '6px', margin: '5px', marginRight: '10px' }}></div>
                <Typography component="div" sx={{ fontSize: 'small' }}>
                  Collaborated with backend developers to integrate frontend components with server-side logic.
                </Typography>
              </li>
              <li style={{ display: 'flex', margin: '10px' }}>
                <div style={{ background: 'black', width: '8px', height: '6px', margin: '5px', marginRight: '10px' }}></div>
                <Typography component="div" sx={{ fontSize: 'small' }}>
                  Implemented responsive design and ensured optimal performance across different devices and browsers.
                </Typography>
              </li>
              <li style={{ display: 'flex', margin: '10px' }}>
                <div style={{ background: 'black', width: '8px', height: '6px', margin: '5px', marginRight: '10px' }}></div>
                <Typography component="div" sx={{ fontSize: 'small' }}>
                  Utilized best practices in coding, version control, and code review to maintain high-quality standards.
                </Typography>
              </li>
              <li style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                <div style={{ background: 'black', width: '8px', height: '6px', margin: '5px', marginRight: '10px' }}></div>
                <Typography component="div" sx={{ fontSize: 'small' }}>
                  Actively participated in Agile development processes, including sprint planning and daily stand-up
                  meetings.
                </Typography>
              </li>
              <li style={{ display: 'flex', margin: '10px' }}>
                <div style={{ background: 'black', width: '8px', height: '6px', margin: '5px', marginRight: '10px' }}></div>
                <Typography component="div" sx={{ fontSize: 'small' }}>

                  Contributed to the improvement of existing projects by identifying and implementing optimizations.
                </Typography>
              </li>
            </Box>
          </Box>
        </Container>
      </React.Fragment>

    </div>
  )
}
