import Grid from "@mui/material/Unstable_Grid2";
import ChunkNews from "./ChunkNews";
import TechCrunchNewsCard from "./TechCrunchNewsCard";

const LatestNews = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
        <TechCrunchNewsCard
          newTitle={"newTitle"}
          newsImg={"newsImg"}
          newsDate={"newsDate"}
          newsLink={"newsLink"}
        />
        <TechCrunchNewsCard
          newTitle={"newTitle2"}
          newsImg={"newsImg2"}
          newsDate={"newsDate2"}
          newsLink={"newsLink2"}
        />
      </Grid>
      <Grid item md={4}>
        <TechCrunchNewsCard
          newTitle={"newTitle3"}
          newsImg={"newsImg3"}
          newsDate={"newsDate3"}
          newsLink={"newsLink3"}
        />
        <TechCrunchNewsCard
          newTitle={"newTitle4"}
          newsImg={"newsImg4"}
          newsDate={"newsDate4"}
          newsLink={"newsLink4"}
        />
      </Grid>
      <Grid item md={4}>
        <ChunkNews />
      </Grid>
    </Grid>
  );
};

export default LatestNews;
