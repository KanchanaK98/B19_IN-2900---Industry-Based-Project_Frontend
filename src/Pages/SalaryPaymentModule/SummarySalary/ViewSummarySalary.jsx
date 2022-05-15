import React from "react";
import { Box } from "@mui/material";
import ViewSummarySalaryTable from "../../../Components/SalaryPaymentModule/SummarySalary/ViewSummarySalaryTable";

const ViewSummarySalary = () => {
  return (
    <div>
      <Box sx={{ p: 4 }}>
        <ViewSummarySalaryTable />
      </Box>
    </div>
  );
};

export default ViewSummarySalary;
