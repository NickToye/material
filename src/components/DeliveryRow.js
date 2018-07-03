import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Checkbox from '@material-ui/core/Checkbox';
import EditDialog from './EditDialog';

class DeliveryRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const details = this.props.details;
    const isSelected = this.props.isSelected;
    const isBookable = this.props.isBookable;
    const isBooked = this.props.isBooked;
    return (
      
      <TableRow key={details.id}>
        <TableCell padding="checkbox">
          <Checkbox checked={isSelected} onClick={this.props.selectedAction} />
        </TableCell>
        <TableCell component="th" scope="row" padding="none">
          {details.consignment}
        </TableCell>
        <TableCell>
          {details.order_ref}
        </TableCell>
        <TableCell><Checkbox checked={isBookable} onClick={this.props.bookableAction} /></TableCell>
        <TableCell><Checkbox checked={isBooked} onClick={this.props.bookedAction} /></TableCell>
        <TableCell>{details.booked_date}</TableCell>
        <TableCell><EditDialog booked_date="test" /></TableCell>
      </TableRow>
    );
  }
}

DeliveryRow.propTypes = {
  details: PropTypes.object,
  isSelected: PropTypes.bool,
};

export default DeliveryRow;