import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  tableCellClasses,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";

const PopularTable = ({
  rating,
  app_icon,
  app_name,
  app_category,
  num_downloads,
}) => {
  const matches = useMediaQuery("(min-width:500px)");

  return (
    <TableContainer component={Paper} data-testid="table-container">
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ display: matches ? "table-cell" : "none" }}>
              Rank
            </StyledTableCell>
            <StyledTableCell align="center">Logo</StyledTableCell>
            <StyledTableCell>App Name</StyledTableCell>
            <StyledTableCell sx={{ display: matches ? "table-cell" : "none" }}>
              Category
            </StyledTableCell>
            <StyledTableCell>Downloads</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell
              align="center"
              sx={{ display: matches ? "table-cell" : "none" }}
            >
              <Typography variant="body1">
                <StarTwoToneIcon />
              </Typography>
              <Typography variant="subtitle1">{rating}</Typography>
            </StyledTableCell>
            <StyledTableCell>
              <img
                src={app_icon}
                style={{
                  width: matches ? 50 : 30,
                  height: matches ? 50 : 30,
                }}
              />
            </StyledTableCell>
            <StyledTableCell>{app_name}</StyledTableCell>
            <StyledTableCell sx={{ display: matches ? "table-cell" : "none" }}>
              {app_category}
            </StyledTableCell>
            <StyledTableCell>{num_downloads}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default PopularTable;
