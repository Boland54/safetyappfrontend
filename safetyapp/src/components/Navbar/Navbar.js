import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import weblogo from '../../images/weblogo.png';
import safetyappText from '../../images/safetyappText.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="dark">
      <Link to="/" className={classes.brandContainer}>
        <img className={classes.navimg} component={Link} to="/" src={weblogo} width="200px" />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Button variant="contained" className={classes.logout} color="secondary" component={Link} to="/">Reports</Button>
            <Button variant="contained" className={classes.logout} color="secondary" component={Link} to="/accidents">Accidents</Button>
            <Button variant="contained" className={classes.logitout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
