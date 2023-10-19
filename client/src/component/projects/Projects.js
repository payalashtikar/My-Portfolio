import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import cm from '../assets/sc/contactmanager.PNG'
import GitHubIcon from '@mui/icons-material/GitHub';
import insta from '../assets/sc/instagram.PNG'
import nt from '../assets/sc/notetaking.PNG'
import todo from '../assets/sc/todo.PNG'
import weather from '../assets/sc/weather.PNG'
import dictionary from '../assets/sc/dictionary.PNG'
import calculator from '../assets/sc/calculator.PNG'
import studeform from '../assets/sc/studeform.PNG'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Projects() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div style={{ minHeight: '100vh' }}>
            <Navbar />
            <Link to='/'>
                <ArrowBackIosIcon maxWidth='sm' style={{ width: '25px', cursor: 'pointer', paddingLeft: '10px' }} />
            </Link>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                <Typography variant='h5' component='div' color="text.secondary" style={{ color: 'gray' }}>My Personal Projects</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap', width: '100%' }}>

                <Card sx={{ width: 500, margin: '30px', background: 'aliceblue' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardHeader
                            title="Contact-Manager-App"
                        />
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <a href='https://github.com/payalashtikar/contacts-manager' target='_blank'>
                                    <GitHubIcon />
                                </a>
                            </IconButton>
                        </CardActions>
                    </div>
                    <CardMedia
                        component="img"
                        height="300"
                        image={cm}
                        alt="loading..."
                    />
                </Card>

                <Card sx={{ width: 500, margin: '30px', background: 'aliceblue' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardHeader
                            title="Photo-Sharing-App"
                        />
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <a href='https://github.com/payalashtikar/InstaClone_-Project' target='_blank'>
                                    <GitHubIcon />
                                </a>
                            </IconButton>
                        </CardActions>
                    </div>
                    <CardMedia
                        component="img"
                        height="300"
                        image={insta}
                        alt="loading..."
                    />
                </Card>

                <Card sx={{ width: 500, margin: '30px', background: 'aliceblue' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardHeader
                            title="ToDo List"
                        />
                        <CardActions disableSpacing>
                            <a href='https://github.com/payalashtikar/TODO_List' target='_blank'>
                                <GitHubIcon />
                            </a>
                        </CardActions>
                    </div>
                    <CardMedia
                        component="img"
                        height="300"
                        image={todo}
                        alt="loading..."
                    />
                </Card>

                <Card sx={{ width: 500, margin: '30px', background: 'aliceblue' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardHeader
                            title="Weather-App"
                        />
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <a href='https://github.com/payalashtikar/Provakil_Frontend_Assessment' target='_blank'>
                                    <GitHubIcon />
                                </a>
                            </IconButton>
                        </CardActions>
                    </div>
                    <CardMedia
                        component="img"
                        height="300"
                        image={weather}
                        alt="loading..."
                    />
                </Card>

                <Card sx={{ width: 500, margin: '30px', background: 'aliceblue' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardHeader
                            title="Note-Taking-App"
                        />
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <a href='https://github.com/payalashtikar/Story-Creation-App' target='_blank'>
                                    <GitHubIcon />
                                </a>
                            </IconButton>
                        </CardActions>
                    </div>
                    <CardMedia
                        component="img"
                        height="300"
                        image={nt}
                        alt="loading..."
                    />

                </Card>

                <Card sx={{ width: 500, margin: '30px', background: 'aliceblue' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardHeader
                            title="Dictionary-App"
                        />
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <a href='https://github.com/payalashtikar/Dictionary-frontend-app' target='_blank'>
                                    <GitHubIcon />
                                </a>
                            </IconButton>
                        </CardActions>
                    </div>
                    <CardMedia
                        component="img"
                        height="300"
                        image={dictionary}
                        alt="loading..."
                    />

                </Card>

                <Card sx={{ width: 500, margin: '30px', background: 'aliceblue' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardHeader
                            title="Calculator-App"
                        />
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <a href='https://github.com/payalashtikar/CalculatorApp' target='_blank'>
                                    <GitHubIcon />
                                </a>
                            </IconButton>
                        </CardActions>
                    </div>
                    <CardMedia
                        component="img"
                        height="300"
                        image={calculator}
                        alt="loading..."
                    />

                </Card>

                <Card sx={{ width: 500, margin: '30px', background: 'aliceblue' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CardHeader
                            title="Student Addmission App"
                        />
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <a href='https://github.com/payalashtikar/Student-Addmission-form-the-webptriot-company-assessment-
' target='_blank'>
                                    <GitHubIcon />
                                </a>
                            </IconButton>
                        </CardActions>
                    </div>
                    <CardMedia
                        component="img"
                        height="300"
                        image={studeform}
                        alt="loading..."
                    />

                </Card>

            </div>
        </div>
    );
}
