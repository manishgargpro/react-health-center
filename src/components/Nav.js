import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const styles = theme => (
  {
    grow: {
      flexGrow: 1,
    }
  });

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

class Nav extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    loggedIn: false,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleModal = () => {
    this.setState({
      anchorEl: null,
      open: true
    });
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
      open: false
    });
  };

  handleLogin = () => {
    if (!this.state.loggedIn) {
      this.setState({
        loggedIn: true,
        open: false
      })
    }
    else if (this.state.loggedIn) {
      this.setState({
        loggedIn: false,
        open: false
      })
    }
  }

  render() {

    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Health Center
            </Typography>
          <Button
            aria-owns={Boolean(this.state.anchorEl) ? 'menu-appbar' : null}
            aria-haspopup="true"
            onClick={this.handleMenu}
            color="inherit"
          >
            Get Started
          </Button>
          {this.state.loggedIn ?
            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleModal}>Log In</MenuItem>
              <MenuItem onClick={this.handleModal}>Sign Up</MenuItem>
            </Menu>
            :
            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleLogin}>Sign Out</MenuItem>
            </Menu>
          }
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
          >
            <DialogTitle id="simple-dialog-title">Log In / Sign Up</DialogTitle>
            <Typography>
              Test Text
            </Typography>
            <Button
              onClick={this.handleLogin}
              color="inherit"
            >
              Test Login
            </Button>
          </Dialog>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Nav);