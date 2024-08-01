
import React, { useState, useEffect } from 'react';
import Citizen from './Citizen';
import SearchFilter from './SearchFilter';

const Citizens = () => {
  const [citizens, setCitizens] = useState([
    { name: 'Lorena', age: 42, address: 'Langtad ,City of Naga, Cebu', status: 'Active' },
    { name: 'Chalcy', age: 17, address: 'Langtad ,City of Naga, Cebu', status: 'Inactive' },
    { name: 'Joanna', age: 22, address: 'San Isidro, City of San Fernando, Cebu', status: 'Active' },
    { name: 'Milcah', age: 17, address: 'North Poblacion', status: 'Inactive' },
    { name: 'Cristino', age: 45, address: 'Langtad ,City of Naga, Cebu', status: 'Active' },
    { name: 'Christian', age: 21, address: 'Langtad ,City of Naga, Cebu', status: 'Inactive' },
    { name: 'Manoytino', age: 23, address: 'Langtad ,City of Naga, Cebu', status: 'Active' },
    { name: 'Kyle', age: 22, address: 'Dumlog Talisay', status: 'Inactive' },
    { name: 'Vhaugn', age: 23, address: 'Dumlog Talisay', status: 'Active' },
    { name: 'Jorge', age: 29, address: 'Dumlog Talisay', status: 'Active' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCitizens, setFilteredCitizens] = useState(citizens);

  useEffect(() => {
    setFilteredCitizens(
      citizens.filter((citizen) =>
        citizen.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, citizens]);

  const toggleStatus = (index) => {
    setCitizens((prevCitizens) =>
      prevCitizens.map((citizen, i) =>
        i === index
          ? { ...citizen, status: citizen.status === 'Active' ? 'Inactive' : 'Active' }
          : citizen
      )
    );
  };

  return (
    <div>
      <h1>Citizens</h1>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="headers">
        <span>No.</span>
        <span>Name</span>
        <span>Age</span>
        <span>Address</span>
        <span>Status</span>
        <span>Action</span>
      </div>
      {filteredCitizens.map((citizen, index) => (
        <Citizen
          key={index}
          index={index}
          citizen={citizen}
          toggleStatus={toggleStatus}
        />
      ))}
    </div>
  );
};

export default Citizens;
