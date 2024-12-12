import { TextField } from "@mui/material";
import { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export function MuiDemo(){
    const [username,setUsername]=useState('');

    function handleNameChange(e){
        setUsername(e.target.value)
    }
    return(
        <div className="container-fluid">
            <h2>Bootstrap Input</h2>
            <div className="w-25">
                <label className="form-label">User Name</label>
                <input type="text" className="form-control" />
            </div>
            <h2>Material UI</h2>
            <TextField variant="standard" label="User Name" onChange={handleNameChange}>

            </TextField>
            <p>
                Hello! {username}
            </p>

            <h2>Date</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Basic date picker" />
                </DemoContainer>
            </LocalizationProvider>
        </div> 
    )
}