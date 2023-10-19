import React, { useState } from 'react';
import './side1.css';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import avtar from '../assets/avtar.jpeg'

export default function Nav_Side() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="content1" >
            <div className={`app1 ${darkTheme ? 'dark-theme' : ' '}`}>
                <div className='icon1'>
                    <MenuIcon onClick={toggleSidebar} />
                </div>
                <div className={`sidebar1 ${isSidebarOpen ? 'open1' : ''}`}>
                    <ul>
                        <li><a href='/'><HomeIcon style={{ marginRight: '10px', marginLeft: 0 }} /> HOME</a></li>
                        <li><a href='/about'><InfoIcon style={{ marginRight: '10px', marginLeft: 0 }} />ABOUT</a></li>
                        <li><a href='/academics'><SchoolIcon style={{ marginRight: '10px', marginLeft: 0 }} />ACADEMICS</a></li>
                        <li><a href='/experiences'><WorkHistoryIcon style={{ marginRight: '10px', marginLeft: 0 }} />EXPERIENCES</a></li>
                        <li><a href='/projects'><WorkHistoryIcon style={{ marginRight: '10px', marginLeft: 0 }} />PROJECTS</a></li>
                        <li><a href='/skills'><SchoolIcon style={{ marginRight: '10px', marginLeft: 0 }} />SKILLS</a></li>
                        <li><a href='/download'><FileDownloadIcon style={{ marginRight: '10px', marginLeft: 0 }} />DOWNLOAD RESUME</a> </li>
                        <li><a href='/contact'><AccountCircleIcon style={{ marginRight: '10px', marginLeft: 0 }} />CONTACT ME</a></li>
                    </ul>
                </div>
                <div className="content">
                    <Toolbar style={{ height: '2vh', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #7f8c8d' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            My-Portfolio
                        </Typography>
                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Payal" src={avtar} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </div>
            </div>
        </div>
    )
}


