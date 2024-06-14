import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}: {
  video: any;
}) => {
  return (
    <Card
      sx={{
        width: { md: "18vw", xs: "320px" },
        boxShadow: "none",
        borderRadius: { xs: "5px", md: 0 },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : "/feed"}>
        <CardMedia sx={{ width: "100%", height: 180 }}>
          <img
            src={snippet?.thumbnails.high.url}
            alt={snippet.title}
            style={{ width: "100%", height: "100%" }}
          />
        </CardMedia>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : "/feed"}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={snippet?.channelId ? `/channel/${snippet.channelId}` : "/feed"}
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle}
              <CheckCircle sx={{ color: "gray", fontSize: 12, ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
