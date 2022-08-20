import React from "react";
import { Box } from "@mui/material";
import { routesConfig } from "router";
import { useRoutes } from "react-router-dom";

const MainViewLayout = () => {
  const routes = useRoutes(routesConfig);

  return (
    <Box
      style={{
        height: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box height={false ? "calc(100% - 100px)" : "100%"}>{routes}</Box>
      {/* {audioPlayer && songsList.length > 0 && (
        <Paper
          elevation={10}
          sx={{
            height: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MusicPlayer />
        </Paper>
      )} */}
    </Box>
  );
};

export default MainViewLayout;
