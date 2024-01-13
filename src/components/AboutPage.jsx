import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import aboutus1 from '../assets/aboutus1.jpg';

const AboutPage = () => {
  const heading = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: '#ed6c02',
    marginTop: '4rem',
  };
  const para1={
    fontSize: '1.2rem',
    color: '#000',
    marginBottom: '2rem',
    marginTop: '2rem',

  }
  const para2={
    fontSize: '1.2rem',
    color: '#000',
    marginBottom: '2rem',
    marginTop: '2rem',

  }
  const para3={
    fontSize: '1.2rem',
    color: '#000',
    marginBottom: '2rem',
    marginTop: '2rem',

  }

  return (
    <>
      <Box bgcolor="#fff" py={3} textAlign="center" marginTop="3rem">
        <Box mt={3}>
          <Typography variant="body1" style={heading}>
            About Us
          </Typography>
        </Box>
      </Box>

      {/* Grid layout */}
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          {/* Left grid with aboutus image */}
          <Box>
            <img src={aboutus1} alt="About Us" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Right grid with text content */}
          <Box p={3}>
            <Typography  style={para1}>
              {/* Replace this with your actual text content */}
              VCare Homeopathy is providing high-quality in-person consultation and teleconsultation based healthcare services.Our mission and vision is to provide world-class homeopathic healthcare to every corner of India via a two-fold approach of physical clinics and tele-medicine. 
            </Typography>

            <Typography  style={para2}>
              {/* Replace this with your actual text content */}
              VCare Homeopathy boasts of having under its aegis a strong team consisting highly-qualified homeopath doctors and paramedical staff who work dedicatedly and round-the-clock to provide physical and online consultations. Besides providing online consultation through tele-medicine facility, we also do doorstep delivery of medicines to patients across India.
            </Typography>
            <Typography  style={para3}>
              {/* Replace this with your actual text content */}
              With 97% cure ratio of our pateints, VCare Homeopathy is creating an unparalleled credibility and reputation amongst the masses, while providing treatment of an array of diseases and disorders – starting from PCOD/PCOS, piles, fistula, fissure to arthritis, spondylitis, renal stone, gout, male sexual disorders, and many others.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutPage;
