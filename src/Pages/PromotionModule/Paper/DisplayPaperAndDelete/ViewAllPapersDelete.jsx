import React from "react";
import ViewAllPapersList from "../../../../Components/PromotionModule/Paper/ViewAllPapersList";
import { Grid } from "@mui/material";

const ViewAllPapersDelete = () => {
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
        <ViewAllPapersList />
      </Grid>
    </Grid>
  );
};

export default ViewAllPapersDelete;
