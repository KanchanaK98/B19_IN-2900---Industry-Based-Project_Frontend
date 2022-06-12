import React from "react";
import AddMoreQuestions from "../../../Components/PromotionModule/Paper/AddMoreQuestions/AddMoreQuestions";
import { Grid } from "@mui/material";

const AddMoreQuestionsForm = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={12}>
        <AddMoreQuestions />
      </Grid>
    </Grid>
  );
};

export default AddMoreQuestionsForm;
