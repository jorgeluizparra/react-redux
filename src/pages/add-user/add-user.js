import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/users/usersSlice'
import { useNavigate } from "react-router-dom";

// Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormComponent from '../../components/form/form'

export default function AddUserPage () {
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const [ state, setState ] = useState({
    name: "",
    username: "",
    email: "",
    address: ""
  })

  function handleSubmit () {
    dispatch(addUser(state))
    navigate('/')
  }

  return (
    <div className="add-user-page">
      <Card>
        <CardContent>
          <CardHeader
            title="Add User Form"
          />
          <FormComponent
            state={state}
            onChange={setState}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
    </div>
  );
}