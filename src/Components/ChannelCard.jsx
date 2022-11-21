import { Box } from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {
  demoProfilePicture,
  demoChannelUrl,
  demoChannelTitle,
} from "../Utils/Constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Link to={`/Channel/${channelDetail?.id?.channelId}`}>
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "356px", md: "320px" },
          height: "326px",
          margin: "auto",
          marginTop: marginTop,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardActionArea sx={{ borderRadius: "80%" }}>
            <CardMedia
              component="img"
              image={
                channelDetail?.snippet?.thumbnails?.medium?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title || demoChannelUrl}
              sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #e3e3e3",
              }}
            />
          </CardActionArea>
          <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
            {channelDetail?.snippet?.title || demoChannelTitle}
            <CheckCircleIcon sx={{ marginBottom: "-4px", height: "15px" }} />
          </Typography>
        </CardContent>
      </Box>
    </Link>
  );
};

export default ChannelCard;
