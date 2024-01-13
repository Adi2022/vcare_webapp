import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Paper } from '@mui/material';
import data from '../data.json'; // Assuming data is imported from the JSON file

const SingleDisease = () => {
  const { id } = useParams();
  const [disease, setDisease] = useState(null);

  useEffect(() => {
    // Find the disease from the data using the ID
    const selectedDisease = data.find((item) => item.id === parseInt(id));
    setDisease(selectedDisease);
  }, [id]);

  return (
    <div style={{padding:"30px",marginTop:"100px"}}>
      {disease ? (
        <Grid container spacing={3} >
          {/* Left Grid */}
          <Grid item xs={12} md={6} >
            <img src={disease.image} alt={disease.title} style={{ width: '50%', height: 'auto',marginTop:"30px",borderRadius:"50px" }} />
          </Grid>
          {/* Right Grid */}
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '50px' }}>
              <Typography variant="h4"  marginBottom="4rem">
                {disease.title}
              </Typography>
              <Typography variant="body1" marginBottom="4rem">{disease.content}</Typography>
              {/* Display other details about the disease */}
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleDisease;
