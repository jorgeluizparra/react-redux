import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import './form.scss'
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/users/usersSlice'

// Components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl, { useFormControl } from '@mui/material/FormControl';

export default function FormComponent () {
    const dispatch = useDispatch();
    const navigate = useNavigate ();
    const [ state, setState ] = useState({
        name: "",
        username: "",
        email: "",
        address: ""
    })
    const [ invalidFields, setInvalidFields ] = useState([]);

    function handleStateChange (event) {
        let { name, value } = event.target
        setState({
            ...state,
            [name]: value
        });
    }

    function handleSubmit () {
        const requiredFields = ['name', 'email']
        if (state.name && state.email) {
            dispatch(addUser(state))
            navigate('/')
        } else {
            var newValue = invalidFields
            requiredFields.forEach(field => {
                if (!state[field]) {
                    newValue.push(field)
                } else {
                    newValue = newValue.filter(invalidField => invalidField != field)
                }
            })
            setInvalidFields(newValue)
        }
        console.log(invalidFields);
    }

    return (
        <div className="form-component">
            <FormControl>
                <TextField
                    value={state.name}
                    onChange={handleStateChange}
                    {...(invalidFields["name"] && { error: true, helperText: "Required field." })}
                    required
                    id="outlined-required"
                    label="Name"
                    name="name"
                />
                <TextField
                    value={state.email}
                    onChange={handleStateChange}
                    {...(invalidFields["email"] && { error: true, helperText: "Required field." })}
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
            </FormControl>
            <div className="align-right">
                <Link to="/">
                    <Button className="cancel-btn" variant="outlined" color="error">Cancel</Button>
                </Link>
                <Button onClick={handleSubmit} variant="contained" color="success">Submit</Button>
            </div>
        </div>
    )
}