import { Grid } from "@mui/material";
import React from "react";
import InterviewList from "../../../Components/RecruitmentModule/InterviewList/InterviewList";
import InterviewPageHead from "../../../Components/RecruitmentModule/InterviewPageHead/InterviewPageHead";

const Interviews = ({ open }) => {
  return (
    <Grid container sx={{ p: 4 }}>
      <Grid item sm={12} md={12}>
        <InterviewPageHead />
      </Grid>
      <Grid
        item
        sm={12}
        md={12}
        sx={{
          mt: 2,
        }}
      >
        <InterviewList open={open} />
      </Grid>
    </Grid>
  );
};

export default Interviews;
