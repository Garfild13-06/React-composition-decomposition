import React from "react";
import NewsSection from "../News/NewsSection";
import Banner from "../Common/Banner";

/**
 * Основной контент страницы.
 */
const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <NewsSection />
      <Banner />
    </div>
  );
};

export default MainContent;
