import React from "react";

/**
 * Телепрограмма.
 */
const tvSchedule = [
  { time: "02:00", show: "THT. Best", channel: "THT International" },
  { time: "02:15", show: "Джинглики", channel: "Карусель INT" },
  { time: "02:25", show: "Наедине со всеми", channel: "Первый" },
];

const TVSchedule: React.FC = () => {
  return (
    <div className="tv-schedule">
      {tvSchedule.map((program, index) => (
        <p key={index}>
          {program.time} <strong>{program.show}</strong> {program.channel}
        </p>
      ))}
    </div>
  );
};

export default TVSchedule;
