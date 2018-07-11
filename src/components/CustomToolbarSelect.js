import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Toolbar from '@material-ui/core/Toolbar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import { withStyles } from "@material-ui/core/styles";

const defaultToolbarStyles = theme => ({
  iconButton: {
    marginLeft: theme.spacing.unit * 3
  },
  inline: {
    display: "inline"
  },
  white: {
    color: "white",
    '&$checked': {
      color: 'white'
    }
  }
});

class CustomToolbarSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: true,
    }
  }
  
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  
  addAction = () => {
    console.log("Add an item!");
  };
  deleteAction = () => {
    console.log("Delete an item!");
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Toolbar>

            <div>
              <FormControlLabel
                label="Bookable"
                className={classes.white}
                control={
                  <Checkbox
                    checked={this.state.checkedA}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA"
                    className={classes.white}
                    color=""
                  />
                }
                
              />
              <Tooltip title="Add">
                <IconButton
                  aria-haspopup="true"
                  onClick={this.addAction}
                  color="inherit"
                >
                  <AddIcon />
                  
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  onClick={this.deleteAction}
                  color="inherit"
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              
              
            </div>
          </Toolbar>

        
      </React.Fragment>
    );
  }

}

export default withStyles(defaultToolbarStyles, { name: "CustomToolbarSelect" })(CustomToolbarSelect)