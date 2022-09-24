import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import PopularTable from "./PopularTable";
import { useTranslation } from "react-i18next";

const Popular = () => {
  const matches = useMediaQuery("(min-width:900px)");
  const { t } = useTranslation();
  return (
    <Grid container mt={6}>
      <Grid item p={matches ? 0 : 2} sx={{ textAlign: "center" }}>
        <Typography
          variant={matches ? "h2" : "h4"}
          mb={3}
          sx={{ fontWeight: matches ? 500 : null }}
        >
          {t("popularSection.popularTitle")}
        </Typography>
        {t("popularSection.popularDesc")}
        <Typography
          variant="body1"
          mb={2}
          sx={{ color: "#a9aaaa" }}
        ></Typography>
      </Grid>
      <Grid item xs={12} lg={6} p={2}>
        <Typography variant="h5" mb={1} sx={{ textAlign: "center" }}>
          {t("popularSection.popularAndroid")}
        </Typography>
        <PopularTable />
      </Grid>
      <Grid item xs={12} lg={6} p={2} sx={{ textAlign: "center" }}>
        <Typography variant="h5" mb={1}>
          Top apps on iOS platform
        </Typography>
        <PopularTable />
      </Grid>
    </Grid>
  );
};

export default Popular;
