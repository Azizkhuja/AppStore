import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const TechCrunchNewsCard = ({ newsTitle, newsImg, newsDate, newsLink }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={{ newsImg }}
              alt="green iguana"
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
