import { React, useState, useEffect } from "react";
import { Typography, Grid, Card, Button, Divider } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import axios from "axios";

// const getTeams = async () => {
//   return await axios
//     .get("http://localhost:8070/employee/getTeam")
//     .then((res) => res.data.data)
//     .catch((err) => {
//       console.log(err);
//     });
// };

function DisplayProduct({ product }) {
  const { productID, productName, description, teamID ,teamName} = product;
  // const [teams, setTeams] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     setTeams(await getTeams());
  //   }
  //   fetchData();
  // }, []);

  console.log(product);
  return (
    <div>
      <Grid container>
        <Grid item md={3}>
          <IconButton
            sx={{ backgroundColor: "lightblue" }}
            component={Link}
            to={`/products/update/${productID}`}
            state={{ product }}
          >
            <EditIcon sx={{ color: "gray" }} fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item md={9}>
          <Card sx={{ mb: 2, minWidth: 1110, backgroundColor: "lightgray" }}>
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
                    <TableCell align="left">
                      <Typography>{teamName}</Typography>
                      {/* {teams.length > 0 &&
                        teams.map((team) => {
                          if (team._id === teamID) {
                            return (
                              <Typography key={team._id}>
                                {team.teamName}
                              </Typography>
                            );
                          }
                        })} */}
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default DisplayProduct;
