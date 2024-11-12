import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Dashboard", path: "/dashboard" },
    { text: "Workouts", path: "/workouts" },
    { text: "About", path: "/about" },
    { text: "Contact-Us", path: "/contact" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const DrawerItems = () => (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
      <List>
        {navLinks.map((link) => (
          <ListItem button component={Link} to={link.path} key={link.text}>
            <Typography>{link.text}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TrackMyFitness
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          {navLinks.map((link) => (
            <Button
              component={Link}
              to={link.path}
              key={link.text}
              color="inherit"
            >
              {link.text}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerItems />
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
