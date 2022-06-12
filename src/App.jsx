import React, { useState } from "react";
import { AvatarGroup, CssBaseline, Grid } from "@mui/material";
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
import ViewCurruntSalary from "./Pages/SalaryPaymentModule/CurruntSalary/ViewCurruntSalary";
import CreateCurruntSalary from "./Components/SalaryPaymentModule/CurruntSalary/CreateCurruntSalary/CreateCurruntSalary";
import UpdateCurruntSalary from "./Components/SalaryPaymentModule/CurruntSalary/UpdateCurruntSalary/UpdateCurruntSalary";
import ViewSummarySalary from "./Pages/SalaryPaymentModule/SummarySalary/ViewSummarySalary";
import ViewCurrentEmployeeSalary from "./Pages/SalaryPaymentModule/EmployeeSalary/ViewCurrentEmployeeSalary";
import ViewAllQuestions from "./Pages/PromotionModule/Questions/ViewAllQuestions";
import CreateQuestions from "./Components/PromotionModule/Question/CreateQuestions/CreateQuestions";
import ViewAllPapersDelete from "./Pages/PromotionModule/Paper/DisplayPaperAndDelete/ViewAllPapersDelete";
import CreateNewPaper from "./Pages/PromotionModule/Paper/CreatePaper";
import ViewOnePaper from "./Components/PromotionModule/Paper/ViewOnePaper/ViewOnePaper";
import UpdatePaperDetails from "./Components/PromotionModule/Paper/UpdatePaperDetails/UpdatePaperDetails";
import AllSubmissions from "./Pages/PromotionModule/AllSubmissions/AllSubmissions";
import DisplayTeamMemberSubmissions from "./Pages/PromotionModule/Evaluations/TeamLead/DisplayTeamSubmissionsAndFeedback";
import DispalyAndSubmitPaper from "./Components/PromotionModule/Submit/DispalyAndSubmitPaper/DispalyAndSubmitPaper";
import EvaluatePaper from "./Components/PromotionModule/Evaluation/EvaluatePaper/EvaluatePaper";
import DisplayMyFeedback from "./Components/PromotionModule/Submit/DisplayFeedback/DisplayFeedback";
import JobRoleDialogBox from "./Components/ReportersManagementModule/CreateEmployeeForm/JobRoleDialogBox";
import FindEmployeeSalary from "./Pages/SalaryPaymentModule/EmployeeSalary/FindCurrentEmployeeSalary";
import DisplayAllEmployees from "./Pages/ReportersManagementModule/DashBoard/DisplayAllEmployees";
import ViewProfileInfo from "./Components/ReportersManagementModule/DisplayEmployees/ViewProfileInfo";
import ViewAllExamList from "./Components/PromotionModule/Exam/ViewAllExamList/ViewAllExamList";
import ScheduleExamForm from "./Components/PromotionModule/Exam/ScheduleExamForm/ScheduleExamForm";
import UpdateExamForm from "./Components/PromotionModule/Exam/UpdateExamForm/UpdateExamForm";
import AddMoreQuestionsForm from "./Pages/PromotionModule/Paper/AddMoreQuestions";
import RecentSection from "./Pages/ReportersManagementModule/DashBoard/RecentSection";
import SessionExpiryDialog from "./Components/SessionExpiry/SessionExpiryDialog";
import {LogoutApi} from "./Api/Login/LogoutApi";

function App() {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  let timer;

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleLogOut = () => {
LogoutApi();
    sessionStorage.clear();
    window.location.replace("/");
  };
  if (user) {
    const action = () => {
      window.location.replace("/sessionExpired");
    };

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(action, 1000 * 60 * 5);
    };

    window.onload = resetTimer;
    window.onclick = resetTimer;
    window.onkeypress = resetTimer;
    window.ontouchstart = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;
    window.addEventListener("scroll", resetTimer, true);
  }

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

              <Route
                exact
                path="/"
                element={<Login setUser={setUser} user={user} />}
              />
              <Route
                exact
                path="/sessionExpired"
                element={<SessionExpiryDialog />}
              />
              {/* Reporter management */}
              <Route path="/dashboard" element={<DashBord />} />
              <Route path="/profile/update/" element={<EditEmployee />} />
              <Route path="/user/update/" element={<EditEmployee />} />
              <Route
                path="/dashboard/create"
                element={<CreateEmployeePage />}
              />

              <Route path="/teams" element={<TeamPage />} />
              <Route path="/teams/update/:id" element={<EditTeam />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/create" element={<CreateProductPage />} />
              <Route path="/teams/create" element={<CreateTeamPage />} />
              <Route path="/pro" element={<CreateProduct />} />
              <Route path="/user" element={<UserProfile user={user} />} />
              <Route path="/products/update/:id" element={<EditProduct />} />
              <Route path="display" element={<ViewProfileInfo />} />
              <Route path="recent" element={<RecentSection />} />

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
                path="/promotion/Paper/addMoreQuestions/:PaperID"
                element={<AddMoreQuestionsForm />}
              />
              <Route
                path="/promotion/Paper/display/:PaperID"
                element={<ViewOnePaper />}
              />
              <Route
                path="/promotion/Paper/updatePaperDetails/:PaperID"
                element={<UpdatePaperDetails />}
              />
              <Route
                path="/promotion/evaluation/allSubmissions"
                element={<AllSubmissions />}
              />
              <Route
                path="/promotion/evaluation/allSubmissions/:EmployeeID"
                element={<DisplayTeamMemberSubmissions />}
              />
              <Route
                path="/promotion/Paper/:EmployeeID"
                element={<DispalyAndSubmitPaper />} //
              />
              <Route
                path="/promotion/evaluation/evaluatePaper/:TeamLeadID/:EmployeeID/:PaperID"
                element={<EvaluatePaper />}
              />
              <Route
                path="/promotion/evaluation/mySubmissions/:EmployeeID"
                element={<DisplayMyFeedback />}
              />
              <Route
                path="/promotion/evaluation/exam/viewExam/:EmployeeID"
                element={<ViewAllExamList />}
              />
              <Route
                path="/promotion/evaluation/exam/scheduleExam/:EmployeeID"
                element={<ScheduleExamForm />}
              />

              <Route
                path="/promotion/evaluation/exam/updateExam/:EmployeeID/:ExamID"
                element={<UpdateExamForm />}
              />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </Box>
  );
}

export default App;
