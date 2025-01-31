// src/components/Layout/PageWrapper.tsx
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import FooterSection from "./FooterSection";

/**
 * Компонент-обертка для центрирования содержимого по горизонтали.
 */
const PageWrapper: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Шапка */}
      <Header />

      {/* Основное содержимое */}
      <div className="content-wrapper">
        {/* Главный контент */}
        <div className="main-content">
          <MainContent />
        </div>

        {/* Боковая колонка */}
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>

      {/* Подвал */}
      <FooterSection />
    </div>
  );
};

export default PageWrapper;