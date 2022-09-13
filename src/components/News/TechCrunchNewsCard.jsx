import Grid from "@mui/material/Unstable_Grid2";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const TechCrunchNewsCard = ({ newsTitle, newsImg, newsDate, newsLink }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardActionArea href={newsLink} target="_blank">
            <CardMedia
              component="img"
              height="153"
              image={newsImg}
              alt={newsImg}
            />
            <CardContent>
              <Typography>{newsDate}</Typography>
              <Typography gutterBottom variant="h5" component="div">
                {newsTitle}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TechCrunchNewsCard;
