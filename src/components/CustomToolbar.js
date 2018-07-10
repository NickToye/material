import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
// import AddIcon from "@material-ui/icons/Add";
import Avatar from '@material-ui/core/Avatar';
import AccountMenu from './AccountMenu';
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarStyles = {
  iconButton: {}
};

class CustomToolbar extends React.Component {
  handleClick = () => {
    console.log("clicked on icon!");
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Tooltip title={"Account Menu"}>
          <IconButton className={classes.iconButton} onClick={this.handleClick}>
            <Avatar alt="Nick Toye" src="https://lh3.googleusercontent.com/-09zlnLAagT4/Wlxpk_-dHGI/AAAAAAAACkg/ukSgWEqq6PEWymiCeWfY_5qY5VjrPi8lwCEwYBhgL/w280-h280-p/familyguy.png" className={classes.avatar} />
            <AccountMenu />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  }

}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(CustomToolbar)