import { Grid } from "@mui/material";
import React, { useState } from "react";
import CreateCandidateForm from "../../../Components/RecruitmentModule/CreateCandidateForm/CreateCandidateForm";
import SearchCandidate from "../../../Components/RecruitmentModule/SearchCandidate/SearchCandidate";

const CreateCandidate = () => {
  const [candidateData, setCandidateData] = useState({
    firstName: "",
    lastName: "",
    NIC: "",
    phoneNumber: "",
    email: "",
    cv: "",
  });
  const [candidateId, setCandidateId] = useState(null);

  
  return (
    <Grid container sx={{p : 4}}>
      <Grid item sm={12} md={8}>
        <CreateCandidateForm
          candidateData={candidateData}
          setCandidateData={setCandidateData}
          candidateId ={candidateId}
        />
      </Grid>
      <Grid item sm={3} md={4}>
        <SearchCandidate
         setCandidateData={setCandidateData}
         setCandidateId={setCandidateId}
        />
      </Grid>
    </Grid>
  );
};

export default CreateCandidate;
