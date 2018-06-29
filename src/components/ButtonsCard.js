import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class ButtonsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <Typography variant="title" gutterBottom>
        ButtonsCard Component
      </Typography>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
      </div>
    );
  }
}

ButtonsCard.propTypes = {
  prop: PropTypes.string,
};

export default ButtonsCard;