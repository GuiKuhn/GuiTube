import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { ChannelDetail, SearchFeed, Feed, VideoDetail } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="/channel/:channelId" element={<ChannelDetail />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
