import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import html from '../assets/html-logo.png'
import css from '../assets/css-logo.jpg'
import reactimg from '../assets/react-logo.png'
import nodeimg from '../assets/node.png'
import mongo from '../assets/mongo-logo.png'
import mui from '../assets/mui-logo.png'
import antimg from '../assets/ant-logo.png'
import js from '../assets/js-logo.png'
import pythonimg from '../assets/python-logo.png'
import Navbar from '../navbar/Navbar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

export default function Skills() {
  return (
    <div>
      <Navbar />
      <Link to='/'>
        <ArrowBackIosIcon maxWidth='sm' style={{ width: '25px', cursor: 'pointer', paddingLeft: '10px' }} />
      </Link>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '25px', flexWrap: 'wrap' }}>
        <Card sx={{ width: 150, background: 'aliceblue', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={html}
            title="HTML"
          />
          <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <a href='https://www.w3schools.com/html/html_editor.asp'><Button size="small">HTML</Button></a>
          </CardActions>
        </Card>

        <Card sx={{ width: 150, background: 'aliceblue', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={css}
            title="CSS"
          />
          <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'><Button size="small"> CSS</Button></a>
          </CardActions>
        </Card>

        <Card sx={{ width: 150, background: 'aliceblue', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={reactimg}
            title="REACTJS"
          />
          <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <a href='https://legacy.reactjs.org/docs/hello-world.html'><Button size="small"> REACTJS</Button></a>
          </CardActions>
        </Card>

        <Card sx={{ width: 150, background: 'aliceblue', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={nodeimg}
            title="NODEJS"
          />
          <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <a href='https://nodejs.org/en/docs/guides'> <Button size="small">NODEJS</Button></a>
          </CardActions>
        </Card>

        <Card sx={{ width: 150, background: 'aliceblue', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={mongo}
            title="MONGODB"
          />
          <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <a href='https://www.w3schools.com/mongodb/'><Button size="small"> MONGODB</Button></a>
          </CardActions>
        </Card>

        <Card sx={{ width: 150, background: 'aliceblue', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={mui}
            title="MUI"
          />
          <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <a href='https://mui.com/material-ui/'> <Button size="small">MATERIAL-UI</Button></a>
          </CardActions>
        </Card>

        <Card sx={{ width: 150, background: 'aliceblue', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={antimg}
            title="ant"
          />
          <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <a href='https://ant.design/docs/react/introduce/'><Button size="small"> ANT-DESIGN</Button></a>
          </CardActions>
        </Card>

        <Card sx={{ width: 150, background: 'aliceblue', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={js}
            title="JS"
          />
          <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'><Button size="small"> JAVASCRIPT</Button></a>
          </CardActions>
        </Card>

        <Card sx={{ width: 150, background: 'aliceblue', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={pythonimg}
            title="PYTHON"
          />
          <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <a href='https://www.w3schools.com/python/'><Button size="small"> PYTHON</Button></a>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}
