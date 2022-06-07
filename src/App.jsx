import React, { useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar/NavBar";
import SideBar from "./Components/Navigation/SideBar/SideBar";
import CreateCandidate from "./Pages/RecruitmentModule/CreateCandidateProfile/CreateCandidate";
import ViewAsset from "./Components/AssetManagementModule/ViewAsset";
import Login from "./Components/Login/Login";
import EditEmployee from "./Components/ReportersManagementModule/UpdateEmployeesForm/EditEmployee";
import DashBord from "./Pages/ReportersManagementModule/DashBoard/DashBord";
import TeamPage from "./Pages/ReportersManagementModule/Teams/TeamPage";
import ProductPage from "./Pages/ReportersManagementModule/Products/ProductPage";
import CreateProduct from "./Components/ReportersManagementModule/ProductCreate/CreateProduct";
import UserProfile from "./Components/ReportersManagementModule/UserProfile/UserProfile";
import EditProduct from "./Components/ReportersManagementModule/ProductUpdate/EditProduct";
import ProgressBar from "./Components/ReportersManagementModule/DisplayEmployees/ProgressBar";
import EditTeam from "./Components/ReportersManagementModule/TeamUpdate/EditTeam";
import CreateTeamPage from "./Pages/ReportersManagementModule/Teams/CreateTeamPage";
import CreateProductPage from "./Pages/ReportersManagementModule/Products/CreateProductPage";
import CreateEmployeePage from "./Pages/ReportersManagementModule/DashBoard/CreateEmployeePage";
import Interviews from "./Pages/RecruitmentModule/Interviews/Interviews";
import AssetInsertion from "./Components/AssetManagementModule/AssetInsertion";
import RequestLeaves from "./Pages/LeaveManagementModule/RequestLeaves/RequestLeaves";
import CreateUpdateInterview from "./Pages/RecruitmentModule/Interviews/CreateUpdateInterview/CreateUpdateInterview";
import LeaveHistory from "./Pages/LeaveManagementModule/RequestLeaves/LeaveHistory";
import RequestedLeaveList from "./Pages/LeaveManagementModule/RequestedLeavesTeamLead/RequestedLeaveList";
import StartInterview from "./Pages/RecruitmentModule/StartInterview/StartInterview";
import CustomizedTeamView from "./Components/ReportersManagementModule/CustomizedTemView/CustomizedTeamView";
import ViewCurruntSalary from "./Pages/SalaryPaymentModule/CurruntSalary/ViewCurruntSalary";
import CreateCurruntSalary from "./Components/SalaryPaymentModule/CurruntSalary/CreateCurruntSalary";
import UpdateCurruntSalary from "./Components/SalaryPaymentModule/CurruntSalary/UpdateCurruntSalary";
import ViewSummarySalary from "./Pages/SalaryPaymentModule/SummarySalary/ViewSummarySalary";
import ViewCurrentEmployeeSalary from "./Pages/SalaryPaymentModule/EmployeeSalary/ViewCurrentEmployeeSalary";
import ViewAllQuestions from "./Pages/PromotionModule/Questions/ViewAllQuestions";
import CreateQuestions from "./Components/PromotionModule/Question/CreateQuestions";
import ViewAllPapersDelete from "./Pages/PromotionModule/Paper/DisplayPaperAndDelete/ViewAllPapersDelete";
import CreateNewPaper from "./Pages/PromotionModule/Paper/CreatePaper";
import AllSubmissions from "./Pages/PromotionModule/AllSubmissions/AllSubmissions";
import DisplayTeamMemberSubmissions from "./Pages/PromotionModule/Evaluations/TeamLead/DisplayTeamSubmissionsAndFeedback";
import JobRoleDialogBox from "./Components/ReportersManagementModule/CreateEmployeeForm/JobRoleDialogBox";

import FindEmployeeSalary from "./Components/SalaryPaymentModule/EmployeeSalary/FindEmployeeSalary";
import DisplayAllEmployees from "./Pages/ReportersManagementModule/DashBoard/DisplayAllEmployees";
import ViewProfileInfo from "./Components/ReportersManagementModule/DisplayEmployees/ViewProfileInfo";
import SlideShow from "./Components/ReportersManagementModule/SlideShow/SlideShow";
function App() {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleLogOut = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  return (
    <Box sx={{ display: "flex", bgcolor: "rgba(231, 243, 238, 0.4)" }}>
      <CssBaseline />
      <BrowserRouter>
        {user && (
          <SideBar
            open={open}
            toggleDrawer={toggleDrawer}
            user={user}
            handleLogOut={handleLogOut}
          />
        )}
        <Grid container>
          <Grid item sm={12} md={12}>
            {user && (
              <NavBar
                open={open}
                user={user}
                toggleDrawer={toggleDrawer}
                handleLogOut={handleLogOut}
              />
            )}
          </Grid>
          <Grid item sm={12} md={12}>
            <Routes>
              {/* LogIn */}
              <Route exact path="/" element={<Login setUser={setUser} />} />
              {/* Reporter management */}
              <Route path="/dashboard" element={<DashBord />} />
              <Route path="/profile/update/" element={<EditEmployee />} />
              <Route path="/user/update/" element={<EditEmployee />} />
              <Route
                path="/dashboard/create"
                element={<CreateEmployeePage />}
              />
              <Route
                path="/slideshow"
                element={<SlideShow />}
              />
              <Route path="/teams" element={<TeamPage />} />
              <Route path="/teams/update/:id" element={<EditTeam />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/create" element={<CreateProductPage />} />
              <Route path="/teams/create" element={<CreateTeamPage />} />
              <Route path="/pro" element={<CreateProduct />} />
              <Route path="/user" element={<UserProfile user={user} />}/>
              <Route path="/products/update/:id" element={<EditProduct />} />
              <Route path="progress" element={<ProgressBar />} />
              <Route path="tree" element={<CustomizedTeamView />} />
              <Route path="job" element={<JobRoleDialogBox/>}/>
              <Route path="display" element={<ViewProfileInfo/>}/>

              {/* Recruitment management */}
              <Route path="/candidate" element={<CreateCandidate />} />
              <Route path="/interview" element={<Interviews open={open} />} />
              <Route
                path="/interview/create"
                element={<CreateUpdateInterview />}
              />
              <Route
                path="/interview/update/:id"
                element={<CreateUpdateInterview />}
              />
              <Route path="/interview/start/:id" element={<StartInterview />} />
              {/* Assets management */}
              <Route path="/asset" element={<ViewAsset user={user} />} />
              <Route path="/assetInsertion" element={<AssetInsertion />} />
              {/* Leave management */}
              <Route path="/requestLeave" element={<RequestLeaves />} />
              <Route path="/leaveHistory" element={<LeaveHistory />} />
              <Route path="/requestedLeaves" element={<RequestedLeaveList />} />


              {/* Payrolls management */}
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
                path="/salary/employeeSalary/:EmployeeID/previous"
                element={<FindEmployeeSalary />}
              />

              {/* Promotion management */}
              <Route
                path="/promotion/Questions"
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
          </Grid>
        </Grid>
      </BrowserRouter>
    </Box>
  );
}

export default App;
