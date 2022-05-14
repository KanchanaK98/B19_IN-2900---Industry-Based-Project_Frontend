import React from "react";
import AllSubmissionsTable from "../../../Components/PromotionModule/Evaluation/AllSubmissionsTable";
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
        <AllSubmissionsTable />
      </Grid>
    </Grid>
  );
};

export default ViewAllPapersDelete;
