import React from 'react';

function Card({ title, children }) {
  return (
    <div className="border rounded shadow p-4 bg-white">
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}

export default Card;
