import React from 'react';
import MUIDataTable from 'mui-datatables';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CustomToolbar from "./CustomToolbar";
import Checkbox from '@material-ui/core/Checkbox';
import LuxonUtils from 'material-ui-pickers/utils/luxon-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DatePicker from 'material-ui-pickers/DatePicker';


class DeliveryManagementTable extends React.Component {
  
  
  
  handleDateChange = (value) => {
    
    this.setState({
      newValue: value
    });
  };
  
  

  render() {
    
    const columns = [
      {
        name: 'Consignment',
        options: {
          filter: true,
        }
      },
      {
        name: 'Order Ref',
        options: {
          filter: true,
        }
      },
      {
        name: 'Bookable',
        options: {
          filter: false,
          customRender: (value, tableMeta, updateValue) => {
            return (
              <FormControlLabel
                value={value ? 'Yes' : 'No'}
                control={
                  <Checkbox color="primary" checked={value} />
                }
                onChange={event => {
                  updateValue(
                    event.target.value === 'Yes' ? false : true
                  );
                  
                }}
              />
            );
          }
        }
      },
      {
        name: 'Booked',
        options: {
          filter: false,
          customRender: (value, tableMeta, updateValue) => {
            return (
              <FormControlLabel
                value={value ? 'Yes' : 'No'}
                control={
                  <Checkbox color="primary" checked={value} />
                }
                onChange={event => {
                  updateValue(event.target.value === 'Yes' ? false : true);
                }}
              />
            );
          }
        }
      },
      {
        name: 'Booked Date',
        options: {
          filter: true,
          customRender: (value, handleDateChange) => {
            return (
              <div>Test</div>
            )
          }
        }
      },  
    ];
    
    const data = [
      ['THC123789', '123456/1', true, true, '2018-01-01'],
      ['THC123789', '159351/3', true, false, ''],
      ['BVR9845', '789456/1', true, true, '2018-02-05'],
      ['MBN2291', '693825/1', false, false, ''],
      ['THC123789', '123456/1', true, true, '2018-01-03'],
      ['THC123789', '159351/3', true, false, ''],
    ];

    const options = {
      filter: true,
      selectableRows: true,
      filterType: 'dropdown',
      responsive: 'scroll',
      rowsPerPage: 10,
      pagination: true,
      customToolbar: () => {
        return <CustomToolbar />;
      }
    };
    
    return (
        <MUIDataTable 
          title={'Delivery Management'} 
          data={data} 
          columns={columns} 
          options={options} 
        />
    );
  }
}

export default DeliveryManagementTable;