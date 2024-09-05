
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

interface ProfileProps {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
  user: {
    name: string;
    email: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ open, onClose, onLogout, user }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Profile</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Name: {user.name}
        </DialogContentText>
        <DialogContentText>
          Email: {user.email}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onLogout} color="primary">
          Logout
        </Button>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Profile;

