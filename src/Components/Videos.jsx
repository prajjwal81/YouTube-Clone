import { Box, Stack } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos?.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.channelId && <ChannelCard channelDetail={item} />}
            {item.id.videoId && <VideoCard videos={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
