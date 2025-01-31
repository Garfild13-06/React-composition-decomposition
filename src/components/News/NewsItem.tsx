import React from "react";

/**
 * Один элемент списка новостей.
 */
interface NewsItemProps {
  icon: string;
  text: string;
  link: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ icon, text, link }) => {
  return (
    <div>
      <img src={icon} alt="" width={16} height={16} />
      <a href={link}>{text}</a>
    </div>
  );
};

export default NewsItem;
