import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
const drawerWidth = 200;

export default function Header () {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        background: "white",
        color: "black",
      }}
    >
      <Toolbar>
        <Button
          variant="contained"
          sx={{
            paddingRight: "26px",
            width: 5,
            minWidth: 0,
            backgroundColor: "blue",
            marginRight: "10px",
          }}
          endIcon={<ChevronLeftIcon sx={{ color: "white" }} />}
        />

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            fontSize: 14,
            lineHeight: 1.57143,
            fontWeight: 600,
            marginLeft: 1,
          }}
        >
          CHI TIẾT MÃ DỰ THƯỞNG
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
