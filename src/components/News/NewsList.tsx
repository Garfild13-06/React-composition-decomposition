import React from "react";
import NewsItem from "./NewsItem";

/**
 * Список новостей.
 */
const newsData = [
  { icon: "🌍", text: "Путин упростил получение номеров", link: "#" },
  { icon: "⚡", text: "На Украине призвали создать ракеты", link: "#" },
];

const NewsList: React.FC = () => {
  return (
    <section>
      {newsData.map((news, index) => (
        <NewsItem key={index} {...news} />
      ))}
    </section>
  );
};

export default NewsList;
