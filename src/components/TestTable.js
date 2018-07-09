import React from 'react';
import MUIDataTable from 'mui-datatables';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '@material-ui/core/Checkbox';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DatePicker from 'material-ui-pickers/DatePicker';


class TestTable extends React.Component {
  
  handleDateChange = date => {
    this.setState({ bookedDate: date });
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
                  updateValue(event.target.value === 'Yes' ? false : true);
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
          customRender: (value) => {
            return (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                
                  <div className="picker">
                    <DatePicker 
                      keyboard
                      clearable 
                      format="Do MMM YYYY" 
                      value={value} 
                      onChange={this.handleDateChange} 
                      InputProps={{ disableUnderline: true }}
                    />
                  </div>
                  
                
              </MuiPickersUtilsProvider>
            )
          }
        }
      },  
    ];
    
    const data = [
      ['THC123789', '123456/1', true, true, '01/01/2018'],
      ['THC123789', '159351/3', true, false, ''],
      ['BVR9845', '789456/1', true, true, '2/01/2018'],
      ['MBN2291', '693825/1', false, false, ''],
      ['THC123789', '123456/1', true, true, '01/01/2018'],
      ['THC123789', '159351/3', true, false, ''],
      ['BVR9845', '789456/1', true, true, '02/01/2018'],
      ['MBN2291', '693825/1', false, false, ''],
      ['THC123789', '123456/1', true, true, '01/01/2018'],
      ['THC123789', '159351/3', true, false, ''],
      ['BVR9845', '789456/1', true, true, '02/01/2018'],
      ['MBN2291', '693825/1', false, false, ''],
      ['THC123789', '123456/1', true, true, '01/01/2018'],
      ['THC123789', '159351/3', true, false, ''],
      ['BVR9845', '789456/1', true, true, '02/01/2018'],
      ['MBN2291', '693825/1', false, false, ''],
      ['THC123789', '123456/1', true, true, '01/01/2018'],
      ['THC123789', '159351/3', true, false, ''],
      ['BVR9845', '789456/1', true, true, '02/01/2018'],
      ['MBN2291', '693825/1', false, false, '']
    ];

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'stacked'
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



export default TestTable;