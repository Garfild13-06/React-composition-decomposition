import React from "react";
import TVSchedule from "../Widgets/TVSchedule";
import LiveStream from "../Widgets/LiveStream";

/**
 * Подвал страницы с телепрограммой и эфиром.
 */
const FooterSection: React.FC = () => {
  return (
    <footer className="footer">
      <TVSchedule />
      <LiveStream />
    </footer>
  );
};

export default FooterSection;
