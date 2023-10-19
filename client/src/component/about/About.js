import React from 'react'
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function About() {
  return (
    <div >
      <Navbar />
      <React.Fragment>
        <CssBaseline />
        <Link to='/'>
          <ArrowBackIosIcon maxWidth='sm' style={{ width: '25px', cursor: 'pointer', paddingLeft: '10px' }} />
        </Link>
        <Container maxWidth="sm" sx={{ padding: '20px', }}>
          <Box sx={{ background: 'aliceblue', minHeight: '100vh', borderRadius: '10px', padding: '25px', display: 'flex', flexDirection: 'column' }} >
            <li style={{ display: 'flex', margin: '10px' }}>
              <Typography component="div">
                I am a Junior Software Engineer with experience in dynamic frontend development
                using a range of web technologies, including ReactJS, NodeJS, MongoDB, Mongoose,
                ExpressJS, JavaScript, HTML5, CSS, Ant-Design, Bootstrap, and Material UI.
                I completed a comprehensive full-stack development course and have actively
                applied my skills in developing dynamic frontend UIs for web applications.
              </Typography>
            </li>
            <li style={{ display: 'flex', margin: '10px' }}>
              <Typography component="div">
                During my experience, I have collaborated closely with backend developers
                to integrate frontend components with server-side logic, ensuring seamless
                functionality and user experiences. I have a strong understanding of responsive
                design principles and have implemented them to optimize performance across
                different devices and browsers.
              </Typography>
            </li>
            <li style={{ display: 'flex', margin: '10px' }}>
              <Typography component="div">
                I am committed to maintaining high-quality coding standards, utilizing best
                practices in areas such as version control and code review. My dedication to
                continuous improvement has led me to identify and implement optimizations that
                enhance existing projects.
              </Typography>
            </li>
            <li style={{ display: 'flex', margin: '10px' }}>
              <Typography component="div">
                Being an active participant in Agile development processes, I have engaged in
                sprint planning and daily stand-up meetings to effectively contribute to project
                progress. I thrive in a collaborative team environment and embrace opportunities
                to work with others towards shared goals.
              </Typography>
            </li>
            <li style={{ display: 'flex', margin: '10px' }}>
              <Typography component="div">
                Overall, I am a motivated and skilled Junior Software Engineer, equipped with the
                knowledge and experience to develop dynamic frontend UIs and contribute to the
                success of web application projects.
              </Typography>
            </li>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  )
}
