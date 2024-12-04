import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";

import HomePage from "./pages/HomePage/HomePage";
import AccountPage from "./pages/Account/AccountPage.js";
//import LearnMore from "./pages/LearnMore/LearnMore.js";
import Profile from './pages/Profile/Profile.js';
import CareerQuiz from './pages/CareerQuiz/CareerQuiz.js';
// import QUiz Page and also other page such as tool kit, route it at the bottom
import CareerPage from './pages/Careers/careerInformationAnalyst.js'; 
import TipsAndTricks from "./pages/LearnMore/TipsTricks.js";
import CareerPageBlueTeam from "./pages/Careers/careerBlueTeam.js";

import CareerPageRedTeam from "./pages/Careers/careerRedTeam.js";
import CareerPageForensics from "./pages/Careers/careerDigitalForensic.js";
import CareerPageSoftwareEngineer from "./pages/Careers/careerSoftwareEngineer.js";
import CareerPageGRC from "./pages/Careers/careerGRC.js";
import ExploreCareers from "./pages/ExploreCareers/exploreCareers.js";
import ToolKit from "./pages/ToolKit/ToolKit.js"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/tipsandtricks" element={<TipsAndTricks />} />
        <Route path="/toolkit" element={<ToolKit />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/career/blueTeam" element={<CareerPageBlueTeam />} />
        <Route path="/career/informationSecurityAnalyst" element={<CareerPage />} />
        <Route path="/career/redTeam" element={<CareerPageRedTeam />} />
        <Route path="/career/digitalForensics" element={<CareerPageForensics />} />
        <Route path="/career/softwareEngineer" element={<CareerPageSoftwareEngineer />} />
        <Route path="/career/grc" element={<CareerPageGRC/>} />
        <Route path="/exploreCareers" element={<ExploreCareers/>} />
        
        
        
        
    
        <Route path="/careerquiz" element={<CareerQuiz />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;

// Use this format to route the career pages and paste back into the </Routes> part
// <Route path="/career/securityEngineering" element={<InfoSecAnalyst />} />