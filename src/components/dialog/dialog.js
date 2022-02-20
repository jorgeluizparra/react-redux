import './dialog.scss';

// Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogComponent ({
  open,
  title,
  text,
  cancelBtn,
  cancelLabel,
  handleCancel,
  acceptLabel,
  handleAccept
}) {
  
  if (!title) return null;
  if (!text) return null;
  const acceptLabelText = acceptLabel ? acceptLabel : 'Accept';
  const cancelLabelText = cancelLabel ? cancelLabel : 'Cancel';
  
  return (
    <div className='dialog-component'>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {
            cancelBtn &&
            <Button
                className='cancel-btn'
                onClick={() => handleCancel('')}
                variant="outlined"
            >
                {cancelLabelText}
            </Button>
          }
          <Button
              onClick={handleAccept}
              variant="contained"
              color="error"
          >
              {acceptLabelText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}