import React from 'react';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

class DeliveryRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
    };
  }
  
  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { id, consignment, order_ref, booking_date } = this.props;
    const isSelected = this.isSelected(id);
    return (
      <TableRow
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={-1}
      key={id}
      selected={isSelected}
      >
      <TableCell padding="checkbox">
        <Checkbox checked onClick={event => this.handleClick(event, id)} />
      </TableCell>
        <TableCell component="th" scope="row" padding="none">
          {consignment}
        </TableCell>
        <TableCell>{order_ref}</TableCell>
        <TableCell><Checkbox checked onClick={event => this.handleBookableClick(event, id)} /></TableCell>
        <TableCell><Checkbox checked onClick={event => this.handleClick(event, id)} /></TableCell>
        <TableCell>{booking_date}</TableCell>
      </TableRow>
    );
  }
}

DeliveryRow.propTypes = {
  prop: PropTypes.string,
};

export default DeliveryRow;