import React from "react";
import NewsList from "./NewsList";
import ExchangeRates from "../Common/ExchangeRates";

/**
 * Секция новостей с курсами валют.
 */
const NewsSection: React.FC = () => {
  return (
    <div className="news-section">
      <NewsList />
      <ExchangeRates />
    </div>
  );
};

export default NewsSection;
