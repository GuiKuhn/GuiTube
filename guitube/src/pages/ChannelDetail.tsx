import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const [channel, setChannel] = useState<any>(null);
  const [videos, setVideos] = useState<any>(null);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${channelId}`).then((data) => {
      setChannel(data?.items[0]);
      console.log(data?.items[0]);
    });
    fetchFromApi(`search?channelId=${channelId}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
        console.log(data?.items);
      }
    );
  }, [channelId]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(to left top, #fc1503, #c00023, #810827, #42101d, #000000)",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
        <ChannelCard channel={channel} marginTop="-125px" />
      </Box>
      <Box display={"flex"} p={2}>
        <Box sx={{ mr: { sm: "12%" } }} />
        {videos && <Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default ChannelDetail;
