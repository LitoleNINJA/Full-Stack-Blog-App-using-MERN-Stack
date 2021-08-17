import { AppBar, Toolbar, IconButton, Typography, Dialog, DialogActions, DialogTitle } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import BookIcon from '@material-ui/icons/Book';
import CreateIcon from '@material-ui/icons/Create';
import def from '../../Assets/default.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Login from '../Buttons/Login';
import Logout from '../Buttons/Logout';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {

    const [toggle, setToggle] = useState(false);
    const animate = () => {
        setToggle(!toggle);
        document.getElementById('sidenav').className = 'sidenav-animate';
    }

    const { user } = useAuth0();

    const [alert, setAlert] = useState(false);
    const handleOpen = () => {
        setAlert(true);
      };
    
      const handleClose = () => {
        setAlert(false);
      };

    return (
        <>
            <AppBar className='navbar'>
                <div style={{ display: toggle ? "block" : "none" }} id='sidenav'>
                    <ul>
                        <li><BookIcon className='listIcon' style={{ marginRight: 15 }} />
                            <Link to='/' className='link' onClick={() => setToggle(false)}>BLOG</Link>
                        </li>
                        <li>
                            {user ?
                                <>
                                    <CreateIcon className='listIcon' style={{ marginRight: 15 }} />
                                    <Link to='/write' className='link' onClick={() => setToggle(false)}>WRITE</Link>
                                </> :
                                <>
                                    <CreateIcon className='listIcon' style={{ marginRight: 15 }} />
                                    <span className='fakelink' onClick={handleOpen}>WRITE</span>
                                </>
                            }
                        </li>
                        <Dialog
                            open={alert}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Please LOG IN first to Write Blog."}
                            </DialogTitle>
                            <DialogActions id="alert-dialog-action">
                                <Login size="large" color="primary"/>
                            </DialogActions>
                        </Dialog>
                    </ul>
                </div>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={animate} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        TechnocratsRobotics.in
                    </Typography>
                    <div className='loginBtn'>
                        {user ? (
                            <>
                                <img className='defaultImgActive' src={user.picture} alt={user.name} />
                                <Logout size="small" color="secondary"/>
                            </>
                        ) : (
                            <>
                                <img className='defaultImg' src={def} alt="..." />
                                <Login size="small" color="secondary"/>
                            </>
                        )
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

