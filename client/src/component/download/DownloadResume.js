import React from 'react';
import resumeurl from './resume.pdf'
import Navbar from '../navbar/Navbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = resumeurl;

    // Creating a temporary link element
    const link = document.createElement('a');

    // Setting the download attribute and the file URL
    link.download = 'Payal_Ashtikar_Resume.pdf';
    link.href = fileUrl;

    // Simulating a click to trigger the download
    document.body.appendChild(link);
    link.click();

    // Removing the link element from the DOM
    document.body.removeChild(link);
  };

  return (
    <div>
      <Navbar />
      <React.Fragment>
        <CssBaseline />
        <Link to='/'>
          <ArrowBackIosIcon maxWidth='sm' style={{ width: '25px', cursor: 'pointer', paddingLeft: '10px' }} />
        </Link>
        <Container maxWidth="sm" sx={{ padding: '20px', }}>
          <Box sx={{ background: 'aliceblue', minHeight: '50vh', borderRadius: '10px', padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="h4" component='h1' color="text.secondary">Download Resume</Typography>
              <Button
                onClick={handleDownload}
                variant="outlined"
                style={{ width: '160px', margin: '25px', padding: '10px' }}
              >
                Download
              </Button>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default DownloadButton;

