import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

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
    <Dialog 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: '20px',
          padding: '20px',
          background: 'linear-gradient(135deg, #f3ec78, #af4261)', // Gradient background
          boxShadow: '0px 5px 15px rgba(0,0,0,0.3)',
        },
      }}
    >
      <DialogTitle 
        sx={{
          color: '#fff',
          fontSize: '1.8rem',
          fontWeight: 'bold',
          textAlign: 'center',
          borderBottom: '2px solid #fff',
        }}
      >
        Profile Information
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center', padding: '20px' }}>
        <Box sx={{ marginBottom: '20px' }}>
          <Typography 
            variant="h6" 
            sx={{
              color: '#fff',
              fontWeight: '600',
              marginBottom: '10px',
              fontSize: '1.5rem'
            }}
          >
            Name:
          </Typography>
          <DialogContentText 
            sx={{
              color: '#f8f8f8', 
              fontSize: '1.2rem',
              fontWeight: '500',
            }}
          >
            {user.name}
          </DialogContentText>
        </Box>
        <Box>
          <Typography 
            variant="h6" 
            sx={{
              color: '#fff',
              fontWeight: '600',
              marginBottom: '10px',
              fontSize: '1.5rem'
            }}
          >
            Email:
          </Typography>
          <DialogContentText 
            sx={{
              color: '#f8f8f8', 
              fontSize: '1.2rem',
              fontWeight: '500',
            }}
          >
            {user.email}
          </DialogContentText>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', paddingBottom: '10px' }}>
        <Button 
          onClick={onLogout} 
          sx={{
            backgroundColor: '#ff4e50', 
            color: '#fff', 
            fontWeight: '600', 
            textTransform: 'none', 
            '&:hover': {
              backgroundColor: '#ff7675'
            },
            marginRight: '10px',
            padding: '8px 20px',
            borderRadius: '25px'
          }}
        >
          Logout
        </Button>
        <Button 
          onClick={onClose} 
          sx={{
            backgroundColor: '#1abc9c', 
            color: '#fff', 
            fontWeight: '600', 
            textTransform: 'none', 
            '&:hover': {
              backgroundColor: '#16a085'
            },
            padding: '8px 20px',
            borderRadius: '25px'
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Profile;
