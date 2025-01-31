import React from "react";

/**
 * Популярные темы и тренды.
 */
const trendingItems = [
  { category: "Недвижимость", text: "о сталинках", link: "#" },
  { category: "Маркет", text: "люстры и светильники", link: "#" },
  { category: "Авто.ру", text: "привод 4x4 до 500 000", link: "#" },
];

const Trending: React.FC = () => {
  return (
    <div className="trending">
      {trendingItems.map((item, index) => (
        <p key={index}>
          <strong>{item.category}</strong> — <a href={item.link}>{item.text}</a>
        </p>
      ))}
    </div>
  );
};

export default Trending;
