import React from "react";
import ViewAllQuestionsTable from "../../../Components/PromotionModule/Question/ViewAllQuestionsTable";

import { Grid } from "@mui/material";

const ViewAllQuestions = () => {
  return (
    <Grid container sx={{ p: 4 }}>
      <Grid
        item
        sm={12}
        md={12}
        sx={{
          // position: 'absolute' ,
          // zIndex: '1',
          // top: 180,
          // left: open ? 330: 150
          mt: 2,
        }}
      >
        {" "}
        <ViewAllQuestionsTable />
      </Grid>
    </Grid>
  );
};

export default ViewAllQuestions;
