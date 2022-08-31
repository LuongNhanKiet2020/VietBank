import * as React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
const Layout = () => {
  return (
    <Box sx={{ display: 'flex',

    width: '100%' }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py:5,
          width: "100%",
        }}
      >
        <Toolbar />
        <Container fixed >
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
export default Layout;
