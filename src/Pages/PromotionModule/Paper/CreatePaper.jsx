import React from "react";
import CreatePaper from "../../../Components/PromotionModule/Paper/CreatePaper/CreatePaper";
import { Grid } from "@mui/material";

const CreateNewPaper = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={12}>
        <CreatePaper />
      </Grid>
    </Grid>
  );
};

export default CreateNewPaper;
