import React from "react";
import ViewCurruntSalaryTable from "../../../Components/SalaryPaymentModule/CurruntSalary/ViewCurruntSalaryTable";
import FindCurruntSalary from "../../../Components/SalaryPaymentModule/CurruntSalary/FindCurruntSalary";
//import CreateCurruntSalary from "../../../Components/SalaryPaymentModule/CurruntSalary/CreateCurruntSalary";

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
        <FindCurruntSalary />
        <ViewCurruntSalaryTable />
      </Grid>
    </Grid>
  );
};

export default ViewCurruntSalary;
