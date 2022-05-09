import React from "react";
import DisplayTeamMemberSubmissions from "../../../../Components/PromotionModule/Evaluation/DisplayTeamMemberSubmissions";
import { Grid } from "@mui/material";

const DisplayTeamSubmissionsAndFeedback = () => {
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
        <DisplayTeamMemberSubmissions />
      </Grid>
    </Grid>
  );
};

export default DisplayTeamSubmissionsAndFeedback;
