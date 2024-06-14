import React from "react";
import { Stack } from "@mui/material";
import { sideBarDisplay } from "../utils/constants";

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Stack
      sx={{
        height: { sx: "auto", md: "95%" },
        flexDirection: { sx: "row", md: "column" },
        gap: "1vh",
      }}
    >
      {sideBarDisplay.map((item, index) => (
        <button
          className="category-btn"
          style={{
            background: item.name === selectedCategory ? "#FC1503" : "black",
            color: "white",
          }}
          onClick={() => {
            setSelectedCategory(item.name);
          }}
          key={item.name}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span
            style={{ opacity: item.name === selectedCategory ? "1" : "0.8" }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
