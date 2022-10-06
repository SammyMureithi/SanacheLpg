import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker, DesktopDateTimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

function DateTimePickerComponent() {
  const [value, setValue] = React.useState (new Date());
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={(newValue)=> setValue(newValue)}
            renderInput={(params) => <TextField {...params} />}/>
      </LocalizationProvider> 
    </div>
  )
}

export default DateTimePickerComponent