import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import AccountMenu from './AccountMenu';
// import Badge from '@material-ui/core/Badge';

// import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const styles = theme => ({
  root: {
    backgroundColor: 'black',
    flexGrow: 1,
    width: '100%',
    marginBottom: 0,
    maxWidth: 1200,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  title: {
    marginLeft: theme.spacing.unit,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  customIcon: {
    top: 7,
    display: 'block'
  },
  tools: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing.unit
  }
});

function ApplicationBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
        
          <div className={classes.flex}>
            <Typography variant="title" color="primary" className={classes.title}>
              Delivery Management
            </Typography>
            <div className={classes.tools}>
              <Avatar alt="Nick Toye" src="https://lh3.googleusercontent.com/-09zlnLAagT4/Wlxpk_-dHGI/AAAAAAAACkg/ukSgWEqq6PEWymiCeWfY_5qY5VjrPi8lwCEwYBhgL/w280-h280-p/familyguy.png" className={classes.avatar} />
              <AccountMenu />
            
              </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ApplicationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicationBar);