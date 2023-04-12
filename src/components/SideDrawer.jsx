import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton, Typography } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";

function SideDrawer() {
  const navigate = useNavigate();
  return (
    <>
      <Drawer
        sx={{
          width: "90px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "90px",
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold", padding: "12px" }}
        >
          DEMO
        </Typography>

        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "gray",
            };
          }}
        >
          <HomeIcon fontSize="large" sx={{ padding: "20px" }} />
        </NavLink>

        <NavLink
          to={"/another-page"}
          style={({ isActive }) => {
            return {
              color: isActive ? "blue" : "gray",
            };
          }}
        >
          <StarIcon fontSize="large" sx={{ padding: "20px" }} />
        </NavLink>

        <NavLink
          to={"/setting-page"}
          style={({ isActive,  }) => {
            return {
              color: isActive ? "blue" : "gray",
            };
          }}
        >
          <SettingsIcon fontSize="large" sx={{ padding: "20px" }} />
        </NavLink>
      </Drawer>
    </>
  );
}

export default SideDrawer;
