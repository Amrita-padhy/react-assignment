import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userStore/userStore";
const drawerWidth = 90;
function Navbar() {
  const users = [
    { label: "Jhon Doe" },
    { label: "The Godfather" },
    { label: "Peter Teal" },
    { label: "Zack Poster" },
  ];
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  console.log(user);
  function handleAutocompleteChange(event, value) {
    console.log(value);
    if (!value) {
      dispatch(setUser({ label: "no user" }));
    } else {
      dispatch(setUser(value));
    }
  }

  return (
    <>
      <Box
        sx={{
          height: "50px",
          zIndex: 1,
          padding: "10px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Autocomplete
            sx={{ width: 300 }}
            options={users}
            onChange={handleAutocompleteChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <Box display={"flex"} justifyContent={"center"}>
            <AccountCircleIcon />
            <Typography>{user.label}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
