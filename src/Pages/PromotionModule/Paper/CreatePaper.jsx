import React from "react";
import CreatePaper from "../../../Components/PromotionModule/Paper/CreatePaper";
import { Grid } from "@mui/material";

const CreateNewPaper = () => {
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
        <CreatePaper />
      </Grid>
    </Grid>
  );
};

export default CreateNewPaper;
