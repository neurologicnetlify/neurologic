import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Button } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link style={{ textDecoration: "none" }} to="/">
          <IconButton
            color="secondary"
            size="large"
            edge="start"
            aria-label="logo"
          >
            <LocalHospitalIcon />
          </IconButton>
        </Link>
        <Typography
          color="secondary"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          NeuroLOGIC
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link style={{ textDecoration: "none" }} to="/">
            <Button color="secondary">Home</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/historical">
            <Button color="secondary">Historical</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/physical">
            <Button color="secondary">Physical</Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/management">
            <Button color="secondary">Management</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
