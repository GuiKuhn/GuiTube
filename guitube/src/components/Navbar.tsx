import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      sx={{
        padding: "1vw 2vw 1vw 2vw",
        backgroundColor: "black",
        justifyContent: "space-between",
        position: "sticky",
      }}
    >
      <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar></SearchBar>
    </Stack>
  );
};
export default Navbar;
