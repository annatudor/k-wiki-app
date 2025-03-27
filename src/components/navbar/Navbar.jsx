import React from "react";
import { AppBar, Toolbar, InputBase, Button } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
//import { Link } from "react-router-dom";
import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <div className="logo">
          <img src="/logo.png" alt="Website Logo" className="logo-image" />
        </div>

        <div className="search-bar">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Find more about your favorite topics"
            className="search-input"
          />
        </div>

        <div className="nav-links">
          <Button
            color=""
            // component={Link}
            to="/explore"
            className="nav-button"
          >
            Explore
          </Button>

          <Button
            color="inherit"
            // component={Link}
            to="/start-wiki"
            className="nav-button"
          >
            Start a wiki
          </Button>
          <Button
            color="inherit"
            // component={Link}
            to="/signin"
            className="nav-button"
          >
            Sign in
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
