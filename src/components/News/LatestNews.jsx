import Grid from "@mui/material/Unstable_Grid2";
import ChunkNews from "./ChunkNews";
import TechCrunchNewsCard from "./TechCrunchNewsCard";

const LatestNews = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
        <TechCrunchNewsCard
          newsTitle={"newTitle"}
          newsImg={"newsImg"}
          newsDate={"newsDate"}
          newsLink={"newsLink"}
        />
        <TechCrunchNewsCard
          newsTitle={"newsTitle2"}
          newsImg={"newsImg2"}
          newsDate={"newsDate2"}
          newsLink={"newsLink2"}
        />
      </Grid>
      <Grid item md={4}>
        <TechCrunchNewsCard
          newsTitle={"newsTitle3"}
          newsImg={"newsImg3"}
          newsDate={"newsDate3"}
          newsLink={"newsLink3"}
        />
        <TechCrunchNewsCard
          newsTitle={"newsTitle4"}
          newsImg={"newsImg4"}
          newsDate={"newsDate4"}
          newsLink={"newsLink4"}
        />
      </Grid>
      <Grid item md={4}>
        <ChunkNews
          chunkNewsTitle={"Chunk title"}
          chunkNewsImg={"Image"}
          chunkNewsDate={"21.02.2012"}
          chunkNewsLink={"test"}
        />
        <ChunkNews
          chunkNewsTitle={"Chunk title"}
          chunkNewsImg={"Image"}
          chunkNewsDate={"21.02.2012"}
          chunkNewsLink={"test"}
        />
        <ChunkNews
          chunkNewsTitle={"Chunk title"}
          chunkNewsImg={"Image"}
          chunkNewsDate={"21.02.2012"}
          chunkNewsLink={"test"}
        />
        <ChunkNews
          chunkNewsTitle={"Chunk title"}
          chunkNewsImg={"Image"}
          chunkNewsDate={"21.02.2012"}
          chunkNewsLink={"test"}
        />
      </Grid>
    </Grid>
  );
};

export default LatestNews;
