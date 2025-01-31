import React from "react";

/**
 * Прямые трансляции (эфир).
 */
const liveStreams = [
  { title: "Управление как искусство", channel: "Успех" },
  { title: "Ночь. Мир в это время", channel: "earthTV" },
  { title: "Андрей Возн...", channel: "Совершенно секретно" },
];

const LiveStream: React.FC = () => {
  return (
    <div className="live-stream">
      {liveStreams.map((stream, index) => (
        <p key={index}>
          <strong>{stream.title}</strong> {stream.channel}
        </p>
      ))}
    </div>
  );
};

export default LiveStream;
