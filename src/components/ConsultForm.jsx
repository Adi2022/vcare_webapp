import React, { useState } from 'react';
import { Grid, Box, TextField, Button } from '@mui/material';
import appointment from '../assets/appointment.webp';

const ConsultForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const main={
    marginTop:"1rem",
    marginBottom:"6rem",
    padding:"4rem 8rem"
  }

  const imageForm={
   borderRadius:"50px",
   width:"100%",
   height:"75vh"
  
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can handle the form submission logic here (e.g., send data to an API)
  };

  return (
    <Grid container spacing={2} style={main}>
      {/* Left Grid */}
      <Grid item xs={12} sm={12} md={6}>
        <Box  mx="auto" p={3} mt={6}>
          <img src={appointment} alt="Appointment" style={imageForm} />
        </Box>
      </Grid>
      
      {/* Right Grid */}
      <Grid item xs={12} sm={12} md={6}>
        <form onSubmit={handleSubmit}>
          <Box maxWidth={400} mx="auto" p={3} mt={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default ConsultForm;
