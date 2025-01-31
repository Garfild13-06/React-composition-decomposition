import React from "react";
import Weather from "../Widgets/Weather";
import Trending from "../Widgets/Trending";
import Map from "../Widgets/Map";

/**
 * Боковая колонка с дополнительной информацией.
 */
const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <Weather />
      <Trending />
      <Map />
    </aside>
  );
};

export default Sidebar;
