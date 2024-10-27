import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import TeststartPage from "./pages/TeststartPage/TeststartPage";
import HomePage from "./pages/HomePage/HomePage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import GoalPage from "./pages/GoalPage/GoalPage";
import AssetsPage from "./pages/AssetsPage/AssetsPage";
import RecommendPage from "./pages/RecommendPage/RecommendPage";
import TestPage from "./pages/TestPage/TestPage";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import ConnectingAccountPage from "./pages/ConnectingAccoutPage/ConnectingAccountPage";
import MainLayout from "./layouts/MainLayout/MainLayout";
import TestResultPage from "./pages/TestResultPage/TestResultPage";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <>
      <Router>
        {/* <AppContainer>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
          </Routes>
        </AppContainer> */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/connecting-account"
            element={<ConnectingAccountPage />}
          />
          <Route element={<DashboardLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/goal" element={<GoalPage />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/recommend" element={<RecommendPage />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/teststart" element={<TeststartPage />} />
            <Route path="/test/consumption" element={<TestPage />} />
            <Route path="/result/consumption" element={<TestResultPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
