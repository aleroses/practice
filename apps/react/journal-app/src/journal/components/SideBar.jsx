import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Typography,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector((state) => state.auth);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        display: { xs: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {displayName}
        </Typography>
      </Toolbar>
      <Divider />

      <Box component="nav">
        <List>
          {["January", "February", "March", "April"].map(
            (text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component="a">
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText secondary={"Lorem Ipsum"}>
                      {text}
                    </ListItemText>
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Drawer>
  );
};
