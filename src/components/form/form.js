import { Link } from "react-router-dom";
import { useState } from 'react';
import './form.scss'

// Components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogComponent from '../dialog/dialog'
import Box from '@mui/material/Box';

export default function FormComponent ({ state, onChange, onSubmit }) {
    const [ openErrorDialog, setOpenErrorDialog ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    function handleStateChange (event) {
        let { name, value } = event.target
        onChange({
            ...state,
            [name]: value
        });
    }

    function handleSubmit () {
        if (!state.name || !state.email) {
            setErrorMessage('Name and email fields are required.')
            setOpenErrorDialog(true)
        } else if (state.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,}){1,2}$/) == null) {
            setErrorMessage('Invalid email.')
            setOpenErrorDialog(true)
        } else {
            onSubmit()
        }
    }

    return (
        <div className="form-component">
            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', rowGap: 1 }}>
                <TextField
                    value={state.name}
                    onChange={handleStateChange}
                    required
                    id="outlined-required"
                    label="Name"
                    name="name"
                />
                <TextField
                    value={state.email}
                    onChange={handleStateChange}
                    required
                    id="outlined-required"
                    label="Email"
                    name="email"
                />
                <TextField
                    value={state.username}
                    onChange={handleStateChange}
                    id="outlined"
                    label="Username"
                    name="username"
                />
                <TextField
                    value={state.address}
                    onChange={handleStateChange}
                    id="outlined"
                    label="City"
                    name="address"
                />
            </Box>
            <div className="align-right">
                <Link to="/">
                    <Button className="cancel-btn" variant="outlined">Cancel</Button>
                </Link>
                <Button onClick={handleSubmit} variant="contained" color="success">Submit</Button>
            </div>
            <DialogComponent
                open={openErrorDialog}
                title="Invalid information"
                text={errorMessage}
                acceptLabel="Ok"
                handleAccept={() => setOpenErrorDialog(false)}
            />
        </div>
    )
}