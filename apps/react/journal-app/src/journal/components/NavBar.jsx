import {
  LogoutOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import { useState } from "react";

export const NavBar = ({ drawerWidth = 240 }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        // position="static"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label=""
            onClick={() => setOpen(true)}
            color="inherit"
            edge="start"
            sx={{
              display: { xs: "flex", sm: "none" },
              mr: 2,
            }}
          >
            <MenuOutlined />
          </IconButton>

          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 1 }}
          >
            JournalApp
          </Typography>

          <IconButton aria-label="" color="error">
            <LogoutOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: { xs: "flex", sm: "none" },
        }}
      >
        <Typography variant="h6" color="initial">
          LolCat
        </Typography>
      </Drawer> */}
    </>
  );
};
