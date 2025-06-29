import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

export const SideBar = ({ drawerWidth }) => {
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
          Ghost
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
