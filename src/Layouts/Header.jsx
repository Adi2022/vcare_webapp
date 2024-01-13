import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Link } from "react-router-dom";
import logo from '../assets/logo.webp'
import logo1 from '../assets/logo1.png'

const pages = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/diseases",
    title: "Diseases",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState(pages[0].path); // Initially select the first page

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handlePageClick = (path) => {
    setSelectedPage(path);
    closeDrawer();
  };

  return (
    <AppBar position="fixed" color="default"   sx={{
      backgroundColor: '#fff',
      color: '#000',
      fontWeight: 'light',
      // Increase the height of AppBar by adding padding to the Toolbar
      paddingTop: '20px', // Adjust this value as needed
      paddingBottom: '20px', // Adjust this value as needed
    }}>
      <Toolbar>

        <Typography sx={{ flexGrow: 1,fontSize:"30px",fontWeight:900 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            {/* <img src={logo1} alt="logo" style={{ width: "250px" }} /> */}
            VCare
          </Link>
        </Typography>

        <Hidden mdUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Hidden mdDown>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {pages.map((page, index) => (
              <React.Fragment key={page.title}>
                <Button
                  color="inherit"
                  component={NavLink}
                  to={page.path}
                  sx={{
                    mx: 1,
                    textDecoration: selectedPage === page.path ? "underline" : "none",
                    fontWeight: selectedPage === page.path ? "bold" : "normal",
                  }}
                  onClick={() => handlePageClick(page.path)}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: selectedPage === page.path ? "#dc2626" : "inherit",
                      fontWeight: selectedPage === page.path ? "bold" : "normal",
                    }}
                  >
                    {page.title}
                  </Typography>
                </Button>
                {index === pages.length - 1 && ( 
                 <Link to="/appointment">
                  <Button variant="contained" color="warning" sx={{ mx: 1 }}>
                    Make an Appointment
                  </Button>
                 </Link>
                )}
              </React.Fragment>
            ))}
             <Hidden lgUp>
              {/* For smaller screens */}
              <Link to="/appointment" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="warning" sx={{ mx: 1 }}>
                  Make an Appointment
                </Button>
              </Link>
            </Hidden>
          </Box>
        </Hidden>
      </Toolbar>

      <Hidden mdUp>
        <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
          <List>
            {pages.map((page) => (
              <ListItem
                key={page.title}
                onClick={() => handlePageClick(page.path)}
                component={NavLink}
                to={page.path}
                sx={{
                  color: selectedPage === page.path ? "#dc2626" : "inherit",
                }}
              >
                <ListItemText primary={page.title} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Header;
