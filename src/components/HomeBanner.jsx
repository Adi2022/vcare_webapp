import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import homebanner from "../assets/backgound1.avif";
import Box from "@mui/material/Box";
import "./HomeBanner.css"; // Import the CSS file
import Typewriter from 'typewriter-effect';

const styles = {
  main: {
    backgroundColor: "#582C4F",
    paddingLeft: "6%",
    paddingRight: "6%",
    paddingTop: "4.6%",
    paddingBottom: "4.6%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  content: {
    textAlign: "left",
    width: "100%",
  },
  bannerTitleStyle1: {
    color: "rgb(0,0,0)",
    fontWeight: "800",
    fontFamily: "Baskerville",
    fontSize: "100px",
    marginBottom:"3rem"
  },
  bannerTitleStyle2: {
    color: "rgb(0,0,0)",
    fontWeight: "400",
    fontSize: "60px",
    
  },
};

const HomeBanner = () => {
  return (
    <>
      <Grid
        container
        style={styles.main}
        className="home-banner"
        sx={{
          backgroundImage: `url(${homebanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "inset 0 -7em 0 rgba(98, 40, 78,.4)",
          
        }}
      >
        <Box sx={styles.content}>
          <Fade in={true} timeout={1000}>
            <Typography variant="h3" sx={styles.bannerTitleStyle1}>
            <Typewriter
                options={{
                  strings: ['Health Care'],
                  autoStart: true,
                  loop: true, // Loop the animation
                  delay: 50, // Delay between each character
                  deleteSpeed: 50, // Speed of deleting characters
                }}
              />
            </Typography>
          </Fade>

          <Fade in={true} timeout={1000}>
            <Typography variant="h3" sx={styles.bannerTitleStyle2}>
              For Whole Family
            </Typography>
          </Fade>
        </Box>
      </Grid>
    </>
  );
};

export default HomeBanner;
