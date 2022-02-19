import { Link } from "react-router-dom";
import './home.scss'
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, deleteUser } from '../../store/users/usersSlice'
import { useState } from "react";

// Components
import TableComponent from '../../components/table/table'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import DialogComponent from '../../components/dialog/dialog'

export default function HomePage() {
    const { users } = useSelector(selectUsers);
    const dispatch = useDispatch();
    const [deleteId, setDeleteId ] = useState('')

    function onDelete () {
      dispatch(deleteUser({ id: deleteId }))
      setDeleteId('')
    }

    return (
      <div className="home-page">
        <Card>
          <CardContent>
            <CardHeader
              action={
                <Link to="/add-user">
                  <Button variant="contained">Add new</Button>
                </Link>
              }
              title="User list"
            />
            <TableComponent
              rows={users}
              onDelete={setDeleteId}
            />
          </CardContent>
        </Card>
        <DialogComponent
          id={deleteId}
          handleAccept={onDelete}
          handleCancel={setDeleteId}
        />
      </div>
    );
}