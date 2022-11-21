import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm} `);
    }
    setSearchTerm("");
  };
  return (
    <Paper
      sx={{
        boxShadow: "none",
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        mr: 70,
      }}
    >
      <input
        className="search-bar"
        type="Search"
        style={{ border: "none" }}
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <IconButton
        sx={{ color: "red", p: "10px", pl: 25 }}
        onClick={handleSubmit}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
