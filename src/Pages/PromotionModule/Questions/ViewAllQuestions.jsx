import React from "react";
import ViewAllQuestionsTable from "../../../Components/PromotionModule/Question/ViewAllQuestionsTable/ViewAllQuestionsTable";
import { Grid } from "@mui/material";

const ViewAllQuestions = () => {
  return (
    <Grid container>
      <Grid item sm={12}>
        <ViewAllQuestionsTable />
      </Grid>
    </Grid>
  );
};

export default ViewAllQuestions;
