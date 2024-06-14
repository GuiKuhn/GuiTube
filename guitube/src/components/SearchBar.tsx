import { IconButton, Paper } from "@mui/material";
import Search from "@mui/icons-material/Search";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      sx={{
        pl: "1vw",
        alignItems: "center",
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 2 },
      }}
    >
      <input
        className="search-bar"
        style={{
          border: "none",
          outline: "none",
          fontFamily: "inherit",
        }}
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ color: "red", pr: "0.5vw" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
