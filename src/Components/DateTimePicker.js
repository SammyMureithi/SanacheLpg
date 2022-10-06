import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { TextField } from '@mui/material';

function DateTimePickerComponent() {
  const [currentDate, setCurrentData] = useState( new Date() );
  function handleChange( e ) {
    setCurrentData( e.target.value );
  }
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDateTimePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={currentDate}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}/>
      </LocalizationProvider> 
    </div>
  )
}

export default DateTimePickerComponent