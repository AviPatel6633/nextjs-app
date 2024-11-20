"use client"
import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import SidebarMenu from './sidebarMenu';

const sidebarwidth = "250px";

export default function Header() {

    const [open, setOpen] = useState();

    const toggleDrawer = () => () => {
        setOpen(open => !open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {/* AppBar */}
            <AppBar
                position="fixed"
                sx={{
                    width: open ? `calc(100% - ${sidebarwidth})` : '100%', // Adjust width when drawer is open
                    transition: 'width 0.3s ease', // Smooth transition
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcome User
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {/* Drawer */}
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                variant="persistent"
                sx={{
                    width: open ? `${sidebarwidth}` : '0',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: open ? `${sidebarwidth}` : '0', // Adjust width when drawer is open
                        // width: 250,
                        boxSizing: 'border-box',
                        
                    },
                }}
            >
                <SidebarMenu />
            </Drawer>
            {/* Main content */}
            <Box
                component="main"
                sx={{
                    width: open ? `calc(100% - ${sidebarwidth})` : '100%', // Adjust width when drawer is open
                    transition: 'width 0.3s ease', // Smooth transition
                }}
            >
                <h2 className='my-5 pt-5' >dfvfdv</h2>
            </Box>
        </Box>
    );
}
