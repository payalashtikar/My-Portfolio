import React, { useState } from 'react';
import './side.css';
import MenuIcon from '@mui/icons-material/Menu';
import Profile from '../profile/Profile';
import Navbar from '../navbar/Navbar';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './dark.css'

function Sidebar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleDarkMode = () => {
        setDarkTheme(!darkTheme)
    }

    return (
        <div className={`app ${darkTheme ? 'dark-theme' : ' '}`}>
            <div className='icon' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <MenuIcon onClick={toggleSidebar} />
                {/* <DarkModeIcon onClick={toggleDarkMode} /> */}
            </div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
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
                <Navbar
                // toggleDarkMode={toggleDarkMode} 
                />
                <Profile />
            </div>
        </div>

    );
}

export default Sidebar;
