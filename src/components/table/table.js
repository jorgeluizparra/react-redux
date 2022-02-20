import { useDispatch } from 'react-redux';
import { sortUsers } from '../../store/users/usersSlice';
import { useState } from 'react';

// Components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function TableComponent ({ rows, onDelete, onEdit }) {
    const dispatch = useDispatch();
    const [ sortDirection, setSortDirection ] = useState('')

    if (!rows) return null;

    function setValues (value) {
        dispatch(sortUsers({ sort: value}))
        setSortDirection(value)
    }

    function handleSort () {
        if (sortDirection == 'dsc' || !sortDirection) {
            setValues('asc')
        } else {
            setValues('dsc')
        }
    }

    return (
        <div className="table-component">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">
                                Username
                                <IconButton
                                    onClick={() => handleSort()}
                                    aria-label="delete"
                                    size="small"
                                >   
                                    {
                                        sortDirection == 'dsc' || !sortDirection ?
                                        <ArrowDownwardIcon fontSize="inherit" /> :
                                        <ArrowUpwardIcon fontSize="inherit" />
                                    }
                                </IconButton>
                            </TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.length > 0 ?
                            rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.username}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.address.city}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            onClick={() => onEdit(row.id)}
                                            variant="contained"
                                            color="warning"
                                        >
                                            Edit
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            onClick={() => onDelete(row.id)}
                                            variant="contained"
                                            color="error"
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )) :
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    No registered users.
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}