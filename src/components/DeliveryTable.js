import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import SearchBar from 'material-ui-search-bar';

// import EditDialog from './EditDialog';
import ConfirmDialog from './ConfirmationDialog';
import DeliveryRow from './DeliveryRow';

let counter = 0;
function createData(consignment, order_ref, bookable, booked, booked_date) {
  counter += 1;
  return { id: counter, consignment, order_ref, bookable, booked, booked_date };
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
  { id: 'consignment', numeric: false, disablePadding: true, label: 'Consignment' },
  { id: 'order_ref', numeric: false, disablePadding: false, label: 'Order Ref' },
  { id: 'bookable', numeric: false, disablePadding: false, label: 'Bookable' },
  { id: 'booked', numeric: false, disablePadding: false, label: 'Booked' },
  { id: 'booked_date', numeric: false, disablePadding: false, label: 'Booked Date' },
];


class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.main, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 0 auto',
  },
  actions: {
    color: theme.palette.primary.main,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  title: {
    flex: '0 0 auto',
  },
  rightIcon: {
    paddingLeft: theme.spacing.unit,
  }
});



let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} selected
          </Typography>
        ) : ''}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        
        {numSelected > 0 ? (
            <Button size="small" variant="contained" color="secondary" className={classes.button} onClick={props.action}>
              Delete Booking
              <Delete className={classes.rightIcon} />
            </Button>
        ) : (
          <SearchBar
            datasource={['apple', 'banana', 'pears']}
            onRequestSearch={() => console.log('onRequestSearch')}
            placeholder="Search...  eg. Container No.(s): THC123789"
            style={{
              width: '100%',
            }}
           />
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 1200,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: '0 0 4px 4px',
  },
  table: {
    // minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  paper: {
    backgroundColor: 'red',
  }
  
});


class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: 'order_ref',
      selected: [],
      
      data: [
        createData('THC123789', '123456/1', true, true, '01/01/2018'),
        createData('THC123789', '159351/3', true, false, null),
        createData('BVR9845', '789456/1', true, true, '02/01/2018'),
        createData('MBN2291', '693825/1', false, false, null ),
        createData('BVR9845', '123654/1', false, false, null ),
      ],
      page: 0,
      rowsPerPage: 5,
    };
    
    this.deleteBookingAction = this.deleteBookingAction.bind(this);
  }
  
  
  
  deleteBookingAction(event) {
    console.log('clicked');
    this.conDia.handleClickOpen();
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    console.log('handle clicked');
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };
  
  
  
  



  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  
  

  isSelected = id => this.state.selected.indexOf(id) !== -1;


  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} action={event => this.deleteBookingAction(event)}  />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  const isBookable = n.bookable;
                  const isBooked = n.booked;
                  
                  return (
                    
                    <DeliveryRow 
                      key={n.id} 
                      details={n} 
                      isSelected={isSelected} 
                      isBookable={isBookable} 
                      isBooked={isBooked}
                      selectedAction={event => this.handleClick(event, n.id)}
                      bookedAction={event => this.handleBookedClick(event, n.id)}
                      />
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      <ConfirmDialog ref={conDia => this.conDia = conDia} />
      </Paper>
      
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);