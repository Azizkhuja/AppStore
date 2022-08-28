import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Hero from "./Hero";

const Main = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid>
          <Hero />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
