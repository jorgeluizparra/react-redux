import './dialog.scss';

// Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogComponent ({ id, handleCancel, handleAccept }) {
    let open = id ? true : false
    return (
      <div className='dialog-component'>
        <Dialog
          open={open}
          onClose={handleCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete User</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
              <Button
                  className='cancel-btn'
                  onClick={() => handleCancel('')}
                  variant="outlined"
              >
                  Cancel
              </Button>
              <Button
                  onClick={handleAccept}
                  variant="contained"
                  color="error"
              >
                  Delete
              </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}