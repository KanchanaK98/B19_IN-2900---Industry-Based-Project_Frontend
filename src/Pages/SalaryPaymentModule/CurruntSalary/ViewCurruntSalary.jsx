import React from "react";
import ViewCurruntSalaryTable from "../../../Components/SalaryPaymentModule/CurruntSalary/ViewCurruntSalaryTable/ViewCurruntSalaryTable";

import { Grid } from "@mui/material";

const ViewCurruntSalary = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={12}>
        <ViewCurruntSalaryTable />
      </Grid>
    </Grid>
  );
};

export default ViewCurruntSalary;
