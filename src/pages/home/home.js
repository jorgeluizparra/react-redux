import { Link, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate ();
    const [deleteId, setDeleteId ] = useState('')
    const [openDialog, setOpenDialog ] = useState(false)

    function handleDeleteClick (id) {
      setDeleteId(id)
      setOpenDialog(true)
    }

    function clearDeleteData() {
      setDeleteId('')
      setOpenDialog(false)
    }

    function handleDelete () {
      dispatch(deleteUser({ id: deleteId }))
      clearDeleteData()
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
              onDelete={handleDeleteClick}
              onEdit={(id) => navigate('edit-user/' + id)}
            />
          </CardContent>
        </Card>
        <DialogComponent
          open={openDialog}
          title="Delete user"
          text="Are you sure ?"
          acceptLabel="Delete"
          cancelBtn
          handleAccept={handleDelete}
          handleCancel={clearDeleteData}
        />
      </div>
    );
}