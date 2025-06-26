import React from 'react';

function Alert({ type = 'info', message }) {
  const base = 'px-4 py-2 rounded text-white';
  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  return <div className={`${base} ${typeStyles[type]}`}>{message}</div>;
}

export default Alert;
