import * as React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import logo from "../assets/logo.webp";
import logo1 from "../assets/logo1.png";

import { useNavigate, Link, useLocation } from "react-router-dom";

const styles = {
  banner: {
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#e5e5e5",
    backgroundSize: "100% 10%",
  },
  logoContainer: {
   marginRight:"80%",
   color:"#fff"
  },
  cardSocialMedia: {
    padding: "6%",
    textAlign: {
      xxs: "left",
      xs: "left",
      sm: "left",
      md: "center",
      lg: "center",
      xl: "center",
    },
  },

  heading: {
    color: "#000",
    fontWeight: "bold",
    fontSize: "25px",
  },

  heading1: {
    color: "#",
    fontWeight: "600",
    fontSize: "12px",
  },

  paragraph: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.33",
    color: "#666666",
  },
};

const styleIcons = {};

export default function Footer() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/enquiry");
  };
  return (
    <footer>
      <Box
        sx={{ backgroundColor: "blue", color: "#fff", fontWeight: "bold" }}
        color="white"
        py={2}
        px={3}
      >
        <Grid container item xs={12} sm={12} md={12} textAlign={"center"}>
         
          <Grid item xs={12} sm={6} md={6}>
           
          </Grid>
        </Grid>
      </Box>
      <Grid container sx={styles.banner}>
        <Grid
          xs={12}
          sm={12}
          md={3}
          style={{ textAlign: "left", padding: "6%" }}
        >
          <Typography sx={styles.heading}>VCare</Typography>
          <span>
            
          </span>
          <span style={styles.logoContainer}>
            <img src={logo1} alt="Company Logo" width={200} height={50} />
          <Typography sx={styles.paragraph}>
          VCare is india's fastest growing Homeopathy Clinic. We offer our services through Physical Clinic and TeleClinic.
          </Typography>
          </span>          
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={3}
          style={{ textAlign: "left", padding: "6%" }}
        >
          <Typography sx={styles.heading}>Company</Typography>
          <p style={styles.paragraph}>About us</p>
          <p style={styles.paragraph}>Careers</p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={3}
          style={{ textAlign: "left", padding: "6%" }}
        >
          <Typography sx={styles.heading}>Support</Typography>
          <p style={styles.paragraph}>Get in Touch</p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={3}
          style={{ textAlign: "left", padding: "6%" }}
        >
          <Typography sx={styles.heading}>Contact Us</Typography>
          <p style={styles.paragraph}>Email: info@example.com</p>
          <p style={styles.paragraph}>Phone: 123-456-7890</p>
        </Grid>
      </Grid>
    </footer>
  );
}