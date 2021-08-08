import { AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';
import './Navbar.css'

import React, { Component } from 'react'

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    
    sidebar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { isOpen } = this.state;
        return (
            <>
            <AppBar className='navbar'>
                <nav className= { isOpen ? 'sidenav active' : 'sidenav' } >
                    <ul>
                        <li><HomeIcon classname='listIcon' style={{marginRight : 15}}/>
                            <Link to='/' className='link'>HOME</Link>
                        </li>
                        <li><BookIcon classname='listIcon' style={{marginRight : 15}} />
                            <Link to='/' className='link'>BLOG</Link>
                        </li>
                        <li><CreateIcon classname='listIcon' style={{marginRight : 15}} />
                            <Link to='/write' className='link'>WRITE</Link>
                        </li>
                    </ul>
                </nav>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={ this.sidebar } >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        TechnocratsRobotics.in
                    </Typography>
                </Toolbar>
            </AppBar>
            </>
        )
    }
}

