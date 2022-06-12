import React from "react";
import ViewSummarySalaryTable from "../../../Components/SalaryPaymentModule/SummarySalary/ViewSummarySalaryTable";
import { Grid } from "@mui/material";

const ViewSummarySalary = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={12} mt={0}>
        <ViewSummarySalaryTable />
      </Grid>
    </Grid>
  );
};

export default ViewSummarySalary;
