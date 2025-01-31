import React from "react";
import Header from "./components/Layout/Header";
import MainContent from "./components/Layout/MainContent";
import Sidebar from "./components/Layout/Sidebar";
import FooterSection from "./components/Layout/FooterSection";

import "./APP.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <div className="content-wrapper">
        <MainContent />
        <Sidebar />
      </div>
      <FooterSection />
    </div>
  );
};

export default App;
