import React from "react";
// import IconButton from "@material-ui/core/IconButton";
// import Tooltip from "@material-ui/core/Tooltip";
// import AddIcon from "@material-ui/icons/Add";

import AccountMenu from './AccountMenu';
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarStyles = theme => ({
  iconButton: {
    marginLeft: theme.spacing.unit * 3
  },
  inline: {
    display: "inline"
  }
});

class CustomToolbar extends React.Component {
  handleClick = () => {
    console.log("clicked on icon!");
  };

  render() {
    // const { classes } = this.props;

    return (
      <React.Fragment>
      <AccountMenu />

        
      </React.Fragment>
    );
  }

}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(CustomToolbar)