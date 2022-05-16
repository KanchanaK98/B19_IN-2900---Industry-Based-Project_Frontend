import React from "react";
import ViewCurruntSalaryTable from "../../../Components/SalaryPaymentModule/CurruntSalary/ViewCurruntSalaryTable";

import { Grid } from "@mui/material";

const ViewCurruntSalary = () => {
  return (
    <Grid container sx={{ p: 4 }}>
      <Grid
        item
        sm={12}
        md={12}
        sx={{
          mt: 2,
        }}
      >
        {" "}
        <ViewCurruntSalaryTable />
      </Grid>
    </Grid>
  );
};

export default ViewCurruntSalary;
