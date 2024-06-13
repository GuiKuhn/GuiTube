import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channel }: { channel: any }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: " center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link
        to={`channel/${channel?.id?.channelId}`}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <CardMedia sx={{ height: "180px", width: "180px", mb: 2 }}>
            <img
              src={channel?.snippet?.thumbnails?.high?.url}
              alt={channel?.snippet?.title}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "1px solid",
              }}
            />
          </CardMedia>
          <Typography variant="h6" fontWeight="bold" sx={{ wordWrap: "wrap" }}>
            {channel?.snippet?.title}
            <CheckCircle sx={{ color: "gray", fontSize: 12, ml: "5px" }} />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {channel?.statistics?.subscriberCount} inscritos
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
