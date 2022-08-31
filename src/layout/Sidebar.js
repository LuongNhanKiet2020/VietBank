import * as React from 'react';
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Grid } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/system';

const drawerWidth = 200;
const Sidebar = ()=>{

    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#1976D2",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        {/*Icon user và thông tin người dùng : xong*/}
        <Container>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ marginBottom: "20px", marginTop: "-35px" }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="white"
            sx={{
              fontSize: 14,
              lineHeight: 1.57143,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Nguyễn Văn D
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontSize: 14, lineHeight: 1.57143, color: "white" }}
          >
            Nhân viên định giá
          </Typography>
        </Grid>
        </Container>
        <Divider />
        <List >
          {["Xuất quà - mã thưởng", "Duyệt xuất quà - mã"].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{mr:3}}>
                <ListItemButton to={text.split(" ").join("").normalize("NFD").replace("-","").replace(/[\u0300-\u036f]/g,"")}>
                  <ListItemIcon sx={{minWidth: "30px",color: "white"}}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text} 
                    sx={{
                      color: "white",
                      fontSize: "15px",
                      lineHeight: 1,
                      marginRight: 2,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
    )
}
export default Sidebar;