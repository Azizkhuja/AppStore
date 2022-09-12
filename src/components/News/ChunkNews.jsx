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
        maxHeight: 124,
        minHeight: 120,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="subtitle2">{chunkNewsTitle}</Typography>
          <Typography variant="caption" color="text.secondary" component="div">
            {chunkNewsDate}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 140 }}
        image={chunkNewsImg}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default ChunkNews;
