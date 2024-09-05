
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const EditableDialog = ({ open, onClose, data, onSave, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Row</DialogTitle>
      <DialogContent>
        <TextField
          label="First Name"
          name="firstName"
          value={data.firstName || ''}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={data.lastName || ''}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={data.age || ''}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Country"
          name="country"
          value={data.country || ''}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Job Title"
          name="jobTitle"
          value={data.jobTitle || ''}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditableDialog;