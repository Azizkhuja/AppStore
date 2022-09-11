import useMediaQuery from "@mui/material/useMediaQuery";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const ChunkNews = ({
  chunkNewsTitle,
  chunkNewsImg,
  chunkNewsDate,
  chunkNewsLink,
}) => {
  const smallMatches = useMediaQuery("(min-width:600px)");
  return (
    <Card
      sx={{
        display: "flex",
        marginBottom: 3,
        justifyContent: smallMatches ? null : "space-between",
        alignItems: smallMatches ? null : "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {chunkNewsDate}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {chunkNewsTitle}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={chunkNewsImg}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default ChunkNews;
