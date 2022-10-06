import React, { useState } from 'react'

import { DesktopDateTimePicker } from '@mui/x-date-pickers-pro';
import { TextField } from '@mui/material';

function DateTimePickerComponent() {
    const [currentDate, setCurrentData] = useState(new Date());
  return (
      <div>
            <DesktopDateTimePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={currentDate}
           // onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
        />
    </div>
  )
}

export default DateTimePickerComponent