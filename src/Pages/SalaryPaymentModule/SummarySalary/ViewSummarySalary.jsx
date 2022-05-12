import React from "react";
import { Box } from "@mui/material";
import ViewSummarySalaryTable from "../../../Components/SalaryPaymentModule/SummarySalary/ViewSummarySalaryTable";
import FindSummarySalary from "../../../Components/SalaryPaymentModule/SummarySalary/FindSummarySalary";

const ViewSummarySalary = () => {
  return (
    <div>
      <Box sx={{ p: 4 }}>
        <ViewSummarySalaryTable />
        <FindSummarySalary />
      </Box>
      <h1>View Summary salary sheet page</h1>
    </div>
  );
};

export default ViewSummarySalary;
