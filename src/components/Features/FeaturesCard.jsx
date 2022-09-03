import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import HourglassTopTwoToneIcon from "@mui/icons-material/HourglassTopTwoTone";
import HomeWorkTwoToneIcon from "@mui/icons-material/HomeWorkTwoTone";
import DirectionsCarTwoToneIcon from "@mui/icons-material/DirectionsCarTwoTone";
import TrendingUpTwoToneIcon from "@mui/icons-material/TrendingUpTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";

import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const FeaturesCard = () => {
  return (
    <Grid container>
      <Grid
        item
        sm={6}
        lg={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            display: "inline-block",
            border: "1px solid #e3e5e8",
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CreditCardTwoToneIcon fontSize="large" sx={{ color: "#0271e1" }} />
            <Typography variant="h6" mt={1}>
              Credit Card
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        sm={6}
        lg={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            display: "inline-block",
            border: "1px solid #e3e5e8",
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <HourglassTopTwoToneIcon
              fontSize="large"
              sx={{ color: "#0271e1" }}
            />
            <Typography variant="h6" mt={1}>
              Hourly rate
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        sm={6}
        lg={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            display: "inline-block",
            border: "1px solid #e3e5e8",
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <HomeWorkTwoToneIcon fontSize="large" sx={{ color: "#0271e1" }} />
            <Typography variant="h6" mt={1}>
              App Store
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        sm={6}
        lg={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            display: "inline-block",
            border: "1px solid #e3e5e8",
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <DirectionsCarTwoToneIcon
              fontSize="large"
              sx={{ color: "#0271e1" }}
            />
            <Typography variant="h6" mt={1}>
              Grid store
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FeaturesCard;
