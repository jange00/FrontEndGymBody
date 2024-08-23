import React, { useState, useEffect } from 'react';

const DateCheck = ({ allPayments }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPayments, setFilteredPayments] = useState([]);



  return (
    <div className="bg-primary text-white p-4 rounded-2xl shadow-md mb-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Search</label>
          <input
            type="text"
            className="w-full p-2 rounded-xl text-black"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2">Total Members</label>
          <input
            type="text"
            className="w-full p-2 rounded-xl text-black"
            value={filteredPayments.length} // Display the length of filteredPayments array
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

// Example static data for testing
const allPaymentsExample = [
  { memberName: 'John Doe', contact: '1234567890' },
  { memberName: 'Jane Smith', contact: '0987654321' },
  { memberName: 'Mike Johnson', contact: '5555555555' },
  // Add more static payment objects here as needed
];

// Usage example
const App = () => (
  <DateCheck allPayments={allPaymentsExample} />
);

export default App;
