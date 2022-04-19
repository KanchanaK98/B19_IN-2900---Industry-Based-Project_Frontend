import React from "react";
import { Typography, Card } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";

function DisplayProduct({ product }) {
  const { _id, productID, productName, description } = product;

  return (
    <div>
      <Card sx={{ mb: 2, minWidth: 1210 ,backgroundColor:"lightgray"}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <Typography>{productID}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{productName}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{description}</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
}

export default DisplayProduct;
