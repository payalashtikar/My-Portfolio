import * as React from 'react';
import image1 from '../assets/tradprofile1.jpg'
import './profile.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Profile() {
    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
            <Card sx={{
                maxWidth: 445,
                background: 'aliceblue',
                color: 'white'
            }}>
                <CardMedia
                    sx={{ height: 240, maxWidth: 450, }}
                    image={image1}
                    title="green iguana"
                />
                <CardContent style={{ borderTop: '1px solid gray' }}>
                    <Typography style={{ color: 'gray', fontSize: 'smaller' }} gutterBottom variant="h6" component="div">
                        Jr. Software Engineer
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ color: 'gray' }}>
                        An ambitious individual who is having 1 year of hands on experience in developing dynamic frontend UI
                        using web technology including ReactJS , NodeJS , ExpressJS , MongoDB, and designing optimal solutions,
                        aspiring to make a career in software engineering with a focus on full stack development.
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to='/download'><Button size="small" >Download Resume</Button></Link>
                    <Link to='/contact'><Button size="small" >Contact Me</Button></Link>
                </CardActions>
            </Card>
        </div>
    )
}
