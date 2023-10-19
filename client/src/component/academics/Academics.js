import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../navbar/Navbar';
import clgimg from '../assets/jdclg.jpg'
import polyimg from '../assets/jdp.webp'
import tenximg from '../assets/tenximg.jpg'
import schlimg from '../assets/njkimg.jpg'
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Academics() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Link to='/'>
        <ArrowBackIosIcon maxWidth='sm' style={{ width: '25px', cursor: 'pointer', paddingLeft: '10px' }} />
      </Link>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>

        <Card sx={{ width: '310px', background: 'aliceblue', margin: '8px' }}>
          <Link to='https://www.the10xacademy.com/' style={{ textDecoration: 'none' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[150] }} aria-label="recipe">
                  10X
                </Avatar>
              }
              title="10X ACADEMY"
              subheader="2021-2022"
            />
          </Link>
          <CardMedia
            component="img"
            height="194"
            image={tenximg}
            alt="School img loading.."
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              I have completed FULL STACK DEVELOPMENT Bootcamp that lasted for 6 months.
              where I have learned a lot about web technologies.
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{ display: 'flex' }}>
            <IconButton  >
              <Typography sx={{ fontSize: 'small' }}>TECHNOLOGIES :</Typography>
            </IconButton>
            <IconButton aria-label="share">
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>MERN STACK</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>JAVASCRIPT</Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '5px' }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>PYTHON</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>ANT-DESIGN</Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '5px' }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>MATERIAL-UI</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 'small' }}>TAILWIND-CSS</Typography>
              </div>
            </CardContent>
          </Collapse>
        </Card>

        <Card sx={{ height: '70vh', width: '310px', background: 'aliceblue', margin: '8px', }}>
          <Link to='https://jdcoem.ac.in/' style={{ textDecoration: 'none' }}>

            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[150] }} aria-label="recipe">
                  JD
                </Avatar>
              }
              title="JD COLLEGE OF ENGINEERING AND MANAGEMENT"
              subheader="2018 - 2021"
            />
          </Link>
          <CardMedia
            component="img"
            height="194"
            image={clgimg}
            alt="JD Collge"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              I have completed my bachelors of technology(b.tech) in Computer Science Engineering in year 2021.
            </Typography>
          </CardContent>
          <CardActions disableSpacing  >
            <IconButton aria-label="add to favorites" >
              <Typography sx={{ fontSize: 'small' }}>CGPA : 8.54</Typography>
            </IconButton>
            <IconButton aria-label="share">
              <Typography sx={{ fontSize: 'small' }}>(81.13%)</Typography>
            </IconButton>

          </CardActions>

        </Card>

        <Card sx={{ height: '70vh', width: '310px', background: 'aliceblue', margin: '8px' }}>
          <Link to='https://www.shiksha.com/college/j-d-polytechnic-nagpur-99067' style={{ textDecoration: 'none' }}>

            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[150] }} aria-label="recipe">
                  JD
                </Avatar>
              }
              title="JD POLYTECHNIC"
              subheader="2015 - 2018"
            />
          </Link>
          <CardMedia
            component="img"
            height="194"
            image={polyimg}
            alt="JD Collge"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              I have completed my diploma in Computer Engineering in year 2018.
            </Typography>
          </CardContent>
          <CardActions disableSpacing  >
            <IconButton aria-label="add to favorites" >
              <Typography sx={{ fontSize: 'small' }}>Percentage :</Typography>
            </IconButton>
            <IconButton aria-label="share">
              <Typography sx={{ fontSize: 'small' }}>74.25%</Typography>
            </IconButton>
          </CardActions>
        </Card>

        <Card sx={{ height: '70vh', width: '310px', background: 'aliceblue', margin: '8px' }}>
          <Link to='https://www.icbse.com/schools/nikunj-vidyalaya-binakimangalwari-67z6r5' style={{ textDecoration: 'none' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[150] }} aria-label="recipe">
                  NV
                </Avatar>
              }
              title="NIKUNJ VIDYALAYA HIGHSCHOOL"
              subheader="2015"
            />
          </Link>
          <CardMedia
            component="img"
            height="194"
            image={schlimg}
            alt="School img loading.."
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              I have completed my Secondary School Certification in year 2015.
            </Typography>
          </CardContent>
          <CardActions disableSpacing  >
            <IconButton aria-label="add to favorites" >
              <Typography sx={{ fontSize: 'small' }}>Percentage :</Typography>
            </IconButton>
            <IconButton aria-label="share">
              <Typography sx={{ fontSize: 'small' }}>69%</Typography>
            </IconButton>
          </CardActions>
        </Card>

      </div>
    </div>
  );
}
