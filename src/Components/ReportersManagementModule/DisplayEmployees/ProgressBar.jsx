import React, { useEffect, useState } from "react";
import axios from "axios";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#183d78" : "#308fe8",
  },
}));

function ProgressBar({ EmpWithProf, EmployeeWithAcc }) {
  
  let count = 0,
    percentage = 0;
  if (
    EmployeeWithAcc[0].advancedLevelResults[0] === null ||
    EmployeeWithAcc[0].advancedLevelResults[0] === " "
  ) {
    count++;
  }
  if (
    EmployeeWithAcc[0].ordinaryLevelResult[0] == null ||
    EmployeeWithAcc[0].ordinaryLevelResult[0] === " "
  ) {
    count++;
  }
  if (
    EmployeeWithAcc[0].achievements[0] === null ||
    EmployeeWithAcc[0].achievements[0] === " "
  ) {
    count++;
  }
  if (
    EmpWithProf[0].language[0] === null ||
    EmpWithProf[0].language[0] === " "
  ) {
    count++;
  }
  if (EmpWithProf[0].degree[0] === null || EmpWithProf[0].degree[0] === " ") {
    count++;
  }
  if (EmpWithProf[0].course[0] === null || EmpWithProf[0].course[0] === " ") {
    count++;
  }
  switch (count) {
    case 1: {
      percentage = 90;
      break;
    }
    case 2: {
      percentage = 80;
      break;
    }
    case 3: {
      percentage = 70;
      break;
    }
    case 4: {
      percentage = 60;
      break;
    }
    case 5: {
      percentage = 50;
      break;
    }
    case 6: {
      percentage = 40;
      break;
    }

    default: {
      percentage = 100;
    }
  }
  return (
    <div>
      <BorderLinearProgress
        variant="determinate"
        value={percentage}
        sx={{ mb: 2, mt: 3 }}
      />
    </div>
  );
}

export default ProgressBar;
