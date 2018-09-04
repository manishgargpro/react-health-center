import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


export default class Nav extends Component {
    
    state = {
        open: false,
        anchorEl: null
    }

    handleOpen = (event) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            open: false,
            anchorEl: null
        })
    }

    render() {
        return (
            <AppBar>
                <Toolbar>
                    <h1>Health Center</h1>
                    <Button
                        onClick={this.handleOpen}
                    >
                        Get Started
                    </Button>
                    <Menu
                        anchorEl={this.state.anchorEl}
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleCLose}>Log In</MenuItem>
                        <MenuItem onClick={this.handleCLose}>Sign Up</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        )
    }
}