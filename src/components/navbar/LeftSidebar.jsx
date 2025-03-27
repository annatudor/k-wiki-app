import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ChatIcon from "@mui/icons-material/Chat";
import "./styles/LeftSidebar.css";

const drawerWidth = 90;

export default function LeftSidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        className="sidebar-drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "64px",
            borderRight: "none !important",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <List>
          <ListItem key="Community" disablePadding>
            <ListItemButton className="sidebar-button">
              <div className="sidebar-content">
                <ListItemIcon className="sidebar-icon">
                  <ChatIcon />
                </ListItemIcon>
                <Typography variant="caption" className="sidebar-text">
                  Community
                </Typography>
              </div>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
