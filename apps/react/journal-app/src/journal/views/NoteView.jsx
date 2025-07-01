import { SaveOutlined } from "@mui/icons-material";
import {
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: 1,
        }}
      >
        <Grid>
          <Typography
            variant="h5"
            fontSize={39}
            fontWeight="light"
          >
            August 28, 2023
          </Typography>
        </Grid>

        <Grid>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          </Button>
        </Grid>

        <Grid container sx={{ flexGrow: 1 }}>
          <TextField
            id=""
            type="text"
            variant="filled"
            label="Title"
            // value={}
            // onChange={}
            placeholder="Enter a title"
            fullWidth
            sx={{ border: "none", mb: 1 }}
          />
          <TextField
            id=""
            type="text"
            variant="filled"
            // label="Title"
            value=""
            onChange=""
            placeholder="What happened today?"
            fullWidth
            multiline
            minRows={5}
            sx={{ border: "none", mb: 1 }}
          />
        </Grid>

        <ImageGallery />
      </Grid>
    </>
  );
};
