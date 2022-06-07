import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { viewProducts } from "../../../Api/ReportersManagementModule/ProductApi";
import CountUp from "react-countup";
import { viewAllTeams } from "../../../Api/ReportersManagementModule/TeamsApi";
import { viewAllEmployees } from "../../../Api/ReportersManagementModule/EmployeeApi";
function ProductCountUp() {
  const [products, setProducts] = useState([]);
  const [teams, setTeams] = useState([]);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setProducts(await viewProducts());
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      setTeams(await viewAllTeams());
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      setEmployees(await viewAllEmployees());
    }
    fetchData();
  }, []);
  console.log(products);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: 130,
            mt: 4,
          },
        }}
      >
        <Paper
          elevation={1}
          sx={{
            backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
            padding: 5,
            textAlign: "center",
            borderRadius:5
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
            PRODUCTS
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "white" }}>
            <CountUp end={products.length} duration={2} />
          </Typography>
        </Paper>
        <Paper
          elevation={1}
          sx={{
            backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
            padding: 5,
            textAlign: "center",
            borderRadius:5
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
            TEAMS
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "white" }}>
            <CountUp end={teams.length} duration={2} />
          </Typography>
        </Paper>
        <Paper
          elevation={1}
          sx={{
            backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
            padding: 5,
            textAlign: "center",
            borderRadius:5
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
            EMPLOYEES
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "white" }}>
            <CountUp end={employees.length} duration={2} />
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}

export default ProductCountUp;
