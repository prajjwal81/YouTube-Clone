import React from "react";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { FetchFromAPI } from "../Utils/FetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setvideos] = useState(null);

  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setvideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, mt: 2 }}>
      <Box
        sx={{
          height: { sx: "auto", md: "auto" },
          borderRight: " 1px solid #3d3d3d",
          px: { sx: "0", md: 2 },
          color: "white",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="Copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 JSM media
        </Typography>
      </Box>

      <Box padding={2} height="130vh" overflowy="auto">
        <Typography
          variant="4"
          mb={2}
          fontWeight="bold"
          sx={{ color: "whitesmoke" }}
          padding="2"
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
