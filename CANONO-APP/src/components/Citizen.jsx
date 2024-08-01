
import React from 'react';

const Citizen = ({ index, citizen, toggleStatus }) => {
  return (
    <div className="citizen">
      <span>{index + 1}</span>
      <span>{citizen.name}</span>
      <span>{citizen.age}</span>
      <span>{citizen.address}</span>
      <span>{citizen.status}</span>
      <button onClick={() => toggleStatus(index)}>Toggle Status</button>
    </div>
  );
};

export default Citizen;
