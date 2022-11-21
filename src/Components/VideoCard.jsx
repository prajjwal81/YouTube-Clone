import React from "react";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardContent } from "@mui/material";
import { demoThumbnailUrl, demoVideoTitle } from "../Utils/Constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const VideoCard = (videos) => {
  return (
    <Link to={`/Video/${videos?.videos?.id?.videoId}`}>
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
          marginTop: 2,
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                videos?.videos?.snippet?.thumbnails?.high?.url ||
                demoThumbnailUrl
              }
              alt="green iguana"
            />
            <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
              <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                {videos?.videos?.snippet?.title.slice(0, 60) || demoVideoTitle}
              </Typography>
              <Typography variant="subtitle2" color="gray">
                {videos?.videos?.snippet?.channelTitle}
                <CheckCircleIcon
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Link>
  );
};

export default VideoCard;
