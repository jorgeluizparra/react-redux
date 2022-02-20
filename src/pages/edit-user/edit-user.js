import { useParams, useNavigate } from "react-router-dom";
import { selectUsers } from '../../store/users/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { useState, useEffect } from 'react';
import { editUser } from '../../store/users/usersSlice';

// Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormComponent from '../../components/form/form'

const selectUser = createSelector(
  selectUsers,
  (_, id) => id,
  ({ users }, id) => users.find(user => user.id == id)
)

export default function EditUserPage () {
  const { id } = useParams()
  const user = useSelector((state) => selectUser(state, id))
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  const [ state, setState ] = useState({
    name: "",
    username: "",
    email: "",
    address: ""
  })

  function handleSubmit () {
    dispatch(editUser({ id: id, data: state}))
    navigate('/')
  }

  useEffect(() => {
    setState({
      name: user.name,
      username: user.username,
      email: user.email,
      address: user.address.city
    })
  }, [user]);

  return (
    <div className="edit-user-page">
      <Card>
        <CardContent>
          <CardHeader
            title="Edit User Form"
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