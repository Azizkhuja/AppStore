import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import styled from "styled-components";

import Bbcnews from "../../assets/bbcnews.png";
import Financialtimes from "../../assets/financialtimes.png";
import Forbes from "../../assets/forbes.png";
import Reuters from "../../assets/reuters.png";
import Skynews from "../../assets/skynews.png";
import Guardian from "../../assets/guardian.png";

const Partners = () => {
  const partnersLogo = [
    {
      id: 3,
      img: Financialtimes,
    },
    {
      id: 4,
      img: Forbes,
    },
    {
      id: 5,
      img: Guardian,
    },
    {
      id: 6,
      img: Reuters,
    },
    {
      id: 7,
      img: Skynews,
    },
    {
      id: 8,
      img: Bbcnews,
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
        }}
      >
        {partnersLogo.map((partner) => (
          <Grid item xs={6} sm={3} md={2}>
            <ImageContainer>
              <img
                key={partner.id}
                src={partner.img}
                alt={partner.img}
                style={{ width: "100%", height: "100%" }}
              />
            </ImageContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ImageContainer = styled.div`
  max-width: 130px;
  max-height: 130px;
`;
export default Partners;
