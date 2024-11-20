"use client";
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import SidebarMenu from './sidebarMenu';
import { FaArrowRightToBracket } from "react-icons/fa6";
import DP from '../../../../public/assets/images/dp-img.png'
import './adminHeader.css'
import Image from 'next/image';
import { clearToken } from '@/utils/serverTokens';
import { useRouter } from 'next/navigation'
import Modal from 'react-bootstrap/Modal';
import { RxCross1 } from "react-icons/rx";
import Link from 'next/link';
const sidebarWidth = "300px";
const headerHeight = "90px";

export default function Header(props) {

    const router = useRouter()

    const [open, setOpen] = useState(true);
    const [signOut, setSignOut] = useState(false);
    const handleClose = () => setSignOut(false);
    const handleShow = () => setSignOut(true);


    const handleLogout = () => {
        clearToken();
        router.push('/');
    }

    const toggleDrawer = () => {
        setOpen(prevOpen => !prevOpen);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    const [showBack, setShowBack] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 992) {
            setOpen(false);
            setShowBack(true);
        }
        else {
            setShowBack(false);
            setOpen(true);
        }
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            {/* AppBar */}
            <AppBar
                position="fixed"
                sx={{
                    width: '100%',
                    height: headerHeight,
                    transition: 'height 0.3s ease',
                    backgroundColor: 'transparent',
                    zIndex: '998'
                }}
                className='admin-header-main '
            >
                <div className='admin-header '>
                    <div className='admin-header-logo' >
                        <h2 className='my-0 d-flex align-items-center gap-1'>
                            <svg width="40" height="40" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.33989 2.92413H5.79935C3.88225 2.92413 2.33107 4.48878 2.33107 6.41546V9.98674C2.33107 11.9126 3.88258 13.4781 5.79935 13.4781H9.33989C11.2567 13.4781 12.8082 11.9126 12.8082 9.98674V6.41546C12.8082 4.48878 11.257 2.92413 9.33989 2.92413ZM5.7993 4.55045H9.33984C10.3556 4.55045 11.1818 5.38384 11.1818 6.41547V9.98675C11.1818 11.0177 10.3552 11.8518 9.33984 11.8518H5.7993C4.78398 11.8518 3.95733 11.0177 3.95733 9.98675V6.41547C3.95733 5.38384 4.78355 4.55045 5.7993 4.55045ZM22.1743 2.92414H18.6326C16.7155 2.92414 15.1643 4.48878 15.1643 6.41547V9.98674C15.1643 11.9126 16.7158 13.4781 18.6326 13.4781H22.1743C24.0901 13.4781 25.6414 11.9124 25.6414 9.98674V6.41547C25.6414 4.48901 24.0905 2.92414 22.1743 2.92414ZM18.6326 4.55045H22.1742C23.189 4.55045 24.0151 5.38396 24.0151 6.41548V9.98675C24.0151 11.0176 23.1886 11.8518 22.1742 11.8518H18.6326C17.6173 11.8518 16.7906 11.0177 16.7906 9.98675V6.41548C16.7906 5.38384 17.6168 4.55045 18.6326 4.55045ZM5.79933 15.6806H9.33987C11.2572 15.6806 12.8081 17.2454 12.8081 19.173V22.7432C12.8081 24.6698 11.257 26.2345 9.33987 26.2345H5.79933C3.88223 26.2345 2.33105 24.6698 2.33105 22.7432V19.173C2.33105 17.2454 3.88201 15.6806 5.79933 15.6806ZM9.33982 17.3069H5.79928C4.78341 17.3069 3.95731 18.1404 3.95731 19.173V22.7432C3.95731 23.7748 4.78353 24.6082 5.79928 24.6082H9.33982C10.3556 24.6082 11.1818 23.7748 11.1818 22.7432V19.173C11.1818 18.1404 10.3557 17.3069 9.33982 17.3069ZM22.1743 15.6806H18.6326C16.7153 15.6806 15.1643 17.2454 15.1643 19.173V22.7432C15.1643 24.6698 16.7155 26.2345 18.6326 26.2345H22.1743C24.0905 26.2345 25.6414 24.6696 25.6414 22.7432V19.173C25.6414 17.2456 24.0907 15.6806 22.1743 15.6806ZM18.6326 17.3069H22.1742C23.1891 17.3069 24.0151 18.1405 24.0151 19.173V22.7432C24.0151 23.7747 23.189 24.6082 22.1742 24.6082H18.6326C17.6168 24.6082 16.7906 23.7748 16.7906 22.7432V19.173C16.7906 18.1404 17.6167 17.3069 18.6326 17.3069Z" fill="#6f42c1"></path></svg>
                            DASHBOARD
                        </h2>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer}
                            className={`${open ? ('active') : ('')} show-sidebar-btn`}
                        >
                            <FaArrowRightToBracket />
                        </IconButton>
                    </div>
                    <div>

                    </div>
                    <div className='admin-header-right'>
                        <h3>Welcome To <span>Admin Panel</span></h3>
                        <div>
                            <Button color="inherit" onClick={handleShow} className='user gap-2'>
                                <Image src={DP} className='img-fluid user-img' alt='user' />
                                <p className='m-0 d-none d-md-block'>User</p>
                            </Button>

                        </div>

                    </div>
                </div>
            </AppBar>

            {/* Drawer */}
            <Drawer
                open={open}
                onClose={!showBack ? null : handleDrawerClose}
                variant={!showBack ? ('persistent') : ('temporary')}
                sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        height: `calc(100vh - ${headerHeight} )`, // Drawer should open under the header
                        top: {
                            xs: '0', // Set top for mobile screens (assuming 56px for the header)
                            lg: headerHeight, // Set default for tablets and larger screens
                        },
                        boxSizing: 'border-box',
                        background: 'transparent',
                        border: '0px',
                        overflow: 'visible',
                        transition: 'top 0.3s ease, height 0.3s ease', // Smooth transition
                        zIndex: '998',
                    },
                }}
            >
                <div className='admin-sidebar'>
                    <SidebarMenu
                        width={sidebarWidth}
                    />
                </div>
            </Drawer>
            {/* Main content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    paddingTop: headerHeight, // Ensures the content doesn't overlap with the header
                    transition: 'margin-left 0.3s ease, width 0.3s ease',
                    marginLeft: open && !showBack ? sidebarWidth : 0, // Shift the content when the drawer is open
                }}

            >
                {/* <div className='adminheader-main'> */}
                <div className='admin-content'>
                    {props.content}
                </div>
                {/* </div> */}
            </Box>

            <Modal show={signOut} onHide={handleClose} size='sm' className='sign-out-model' backdropClassName='opacity-0'>
                <Modal.Body>
                    <Button variant="link" onClick={handleClose} className='sign-out-close' >
                        <RxCross1 />
                    </Button>
                    <div className='signout-model-box'>
                        <Image src={DP} alt='' className='user-img-header'></Image>
                        <div>
                            <h5 className='text-16'>User</h5>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='p-0 bg-lineartheme'>
                    <Link href="/admin/login" variant="primary" onClick={handleLogout} className='sign-out-btn justify-content-center'>
                        Sign Out
                    </Link>
                </Modal.Footer>
            </Modal>
        </Box>
    );
}
