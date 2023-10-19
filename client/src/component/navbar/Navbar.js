import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import avtar from '../assets/avtar.jpeg'
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Navbar({ toggleDarkMode }) {

    return (
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
                    {/* <DarkModeIcon onClick={toggleDarkMode} style={{padding:'5px',fontSize:'50px'}}/> */}
                    <Avatar alt="Payal" src={avtar} />
                </IconButton>
            </Box>
        </Toolbar>
    );
}
export default Navbar;
