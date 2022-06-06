import { useState, useEffect } from "react";
import * as React from "react";
import { Box, Grid, Card, Typography, Divider, Button } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import PaidSharpIcon from "@mui/icons-material/PaidSharp";
import { useParams } from "react-router-dom";
import { viewEmployeeSalaryApi } from "../../../Api/SalaryPaymentModule/EmployeeSalaryApi/viewEmployeeSalaryApi";

export default function ViewSummarySalaryTable() {
  const [employeeSalaryList, setEmployeeSalaryList] = useState([]);
  const { EmployeeID } = useParams();

  useEffect(() => {
    async function fetchData() {
      setEmployeeSalaryList(await viewEmployeeSalaryApi(EmployeeID));
    }
    fetchData();
  }, [EmployeeID]);
  console.log("--", employeeSalaryList);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#d7dde0",
          padding: 3,
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          justifyContent="center"
        >
          <Grid item xs={6}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  sx={{ m1: 2, fontWeight: "medium", color: "#183d78", mb: 2 }}
                >
                  Salary Sheet
                </Typography>
              </Grid>{" "}
              <Grid item xs={6} align="right">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#183d78" }}
                  onClick={() => window.open(`${EmployeeID}/previous`, "_self")}
                >
                  Previous records&nbsp;
                  <ArrowForwardIosSharpIcon />
                </Button>
              </Grid>{" "}
            </Grid>{" "}
            {employeeSalaryList.map((salary, key) => (
              <Card sx={{ padding: 3 }} key={key}>
                <Typography variant="h6" sx={{ color: "#708bb8" }}>
                  <PaidSharpIcon />
                  &nbsp;{" "}
                  {new Date().toLocaleString("default", { month: "long" })}{" "}
                  {new Date().getFullYear()}
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }}></Divider>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                      EmployeeID
                    </Typography>
                  </Grid>{" "}
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: 400, color: "#9da1a6" }}>
                      {salary.EmployeeID}
                    </Typography>
                  </Grid>{" "}
                </Grid>{" "}
                <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                      Basic Salary
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: 400, color: "#9da1a6" }}>
                      {salary.BasicSalary}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                      Internet Allowance
                    </Typography>
                  </Grid>{" "}
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: 400, color: "#9da1a6" }}>
                      {salary.InternetAllowance}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                      VehicleAllowance
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: 400, color: "#9da1a6" }}>
                      {salary.VehicleAllowance}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                      Employee EPF
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: 400, color: "#9da1a6" }}>
                      {salary.EmoloyeeEpf}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                      Company EPF
                    </Typography>
                  </Grid>{" "}
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: 400, color: "#9da1a6" }}>
                      {salary.CompanyEPF}
                    </Typography>
                  </Grid>
                </Grid>{" "}
                <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                      ETF
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: 400, color: "#9da1a6" }}>
                      {salary.ETF}
                    </Typography>
                  </Grid>
                </Grid>{" "}
                <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                <Grid container spacing={2} columns={12}>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: "bold", color: "#9da1a6" }}>
                      Net Salary
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography sx={{ fontWeight: 400, color: "#9da1a6" }}>
                      {salary.NetSalary}
                    </Typography>
                  </Grid>
                  <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                </Grid>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
