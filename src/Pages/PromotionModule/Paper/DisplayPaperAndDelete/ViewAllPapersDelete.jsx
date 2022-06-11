import React from "react";
import ViewAllPapersList from "../../../../Components/PromotionModule/Paper/ViewAllPapersList/ViewAllPapersList";
import { Grid } from "@mui/material";

const ViewAllPapersDelete = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={12}>
        <ViewAllPapersList />
      </Grid>
    </Grid>
  );
};

export default ViewAllPapersDelete;
