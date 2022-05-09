import React, { useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar/NavBar";
import SideBar from "./Components/Navigation/SideBar/SideBar";
import CreateCandidate from "./Pages/RecruitmentModule/CreateCandidateProfile/CreateCandidate";
import ViewAsset from "./Components/AssetManagementModule/ViewAsset";
// import ViewAsset from './Pages/AssetManagementModule/ViewAsset'
import Login from "./Components/Login/Login";
import Interviews from "./Pages/RecruitmentModule/Interviews/Interviews";
import AssetInsertion from "./Components/AssetManagementModule/AssetInsertion";
import CreateUpdateInterview from "./Pages/RecruitmentModule/Interviews/CreateUpdateInterview/CreateUpdateInterview";

//currunt salary
import ViewCurruntSalary from "./Pages/SalaryPaymentModule/CurruntSalary/ViewCurruntSalary";
import CreateCurruntSalary from "./Components/SalaryPaymentModule/CurruntSalary/CreateCurruntSalary";
import UpdateCurruntSalary from "./Components/SalaryPaymentModule/CurruntSalary/UpdateCurruntSalary";

//summary salary
import ViewSummarySalary from "./Pages/SalaryPaymentModule/SummarySalary/ViewSummarySalary";

///employee salary
import ViewCurrentEmployeeSalary from "./Pages/SalaryPaymentModule/EmployeeSalary/ViewCurrentEmployeeSalary";

//Promotion
//Question
import ViewAllQuestions from "./Pages/PromotionModule/Questions/ViewAllQuestions";
import CreateQuestions from "./Components/PromotionModule/Question/CreateQuestions";

//Paper
import ViewAllPapersDelete from "./Pages/PromotionModule/Paper/DisplayPaperAndDelete/ViewAllPapersDelete";
import CreateNewPaper from "./Pages/PromotionModule/Paper/CreatePaper";

//Submissions
import AllSubmissions from "./Pages/PromotionModule/AllSubmissions/AllSubmissions";
import DisplayTeamMemberSubmissions from "./Pages/PromotionModule/Evaluations/TeamLead/DisplayTeamSubmissionsAndFeedback";

function App() {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {user && <SideBar open={open} toggleDrawer={toggleDrawer} />}
      <Grid container>
        <Grid item sm={12} md={12}>
          {user && <NavBar open={open} toggleDrawer={toggleDrawer} />}
        </Grid>
        <Grid item sm={12} md={12}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Login setUser={setUser} />} />
              <Route path="/candidate" element={<CreateCandidate />} />
              <Route path="/interview" element={<Interviews open={open} />} />
              <Route
                path="/interview/create"
                element={<CreateUpdateInterview />}
              />
              <Route path="/asset" element={<ViewAsset />} />
              <Route path="/assetInsertion" element={<AssetInsertion />} />

              <Route
                path="/salary/currentSalary"
                element={<ViewCurruntSalary />}
              />
              <Route
                path="/salary/currentSalary/create"
                element={<CreateCurruntSalary />}
              />
              <Route
                path="/salary/currentSalary/update/:EmployeeID"
                element={<UpdateCurruntSalary />}
              />
              <Route
                path="/salary/summarySalary"
                element={<ViewSummarySalary />}
              />
              <Route
                path="/salary/employeeSalary/:EmployeeID"
                element={<ViewCurrentEmployeeSalary />}
              />

              <Route
                path="/promotion/Questions/"
                element={<ViewAllQuestions />}
              />
              <Route
                path="/promotion/Questions/create"
                element={<CreateQuestions />}
              />
              <Route
                path="/promotion/Paper"
                element={<ViewAllPapersDelete />}
              />
              <Route
                path="/promotion/Paper/createPaper"
                element={<CreateNewPaper />}
              />

              <Route
                path="/promotion/evaluation/allSubmissions"
                element={<AllSubmissions />}
              />
              <Route
                path="/promotion/evaluation/allSubmissions/:EmployeeID"
                element={<DisplayTeamMemberSubmissions />}
              />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
