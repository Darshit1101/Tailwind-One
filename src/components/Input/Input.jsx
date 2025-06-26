import React from 'react';

function Input({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
}

export default Input;
