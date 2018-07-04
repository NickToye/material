import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Checkbox from '@material-ui/core/Checkbox';
import EditDialog from './EditDialog';

class DeliveryRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBookable: this.props.isBookable,
      isBooked: this.props.isBooked
    };
    
    this.updateBookable = this.updateBookable.bind(this);
    this.updateBooked = this.updateBooked.bind(this);
  }
  
  updateBookable() {
    this.setState(prev => ({ isBookable: !prev.isBookable }));
  }
  
  updateBooked() {
    this.setState(prev => ({ isBooked: !prev.isBooked }));
  }

  render() {
    const details = this.props.details;
    const isSelected = this.props.isSelected;
    const isBookable = this.state.isBookable;
    const isBooked = this.state.isBooked;
    // console.log(isBookable);
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
        <TableCell><Checkbox checked={isBookable} onClick={this.updateBookable} /></TableCell>
        <TableCell><Checkbox checked={isBooked} onClick={this.updateBooked} /></TableCell>
        <TableCell>{details.booked_date}</TableCell>
        <TableCell><EditDialog booked_date={details.booked_date} isBookable={isBookable} isBooked={isBooked} /></TableCell>
      </TableRow>
    );
  }
}

DeliveryRow.propTypes = {
  details: PropTypes.object,
  isSelected: PropTypes.bool,
};

export default DeliveryRow;