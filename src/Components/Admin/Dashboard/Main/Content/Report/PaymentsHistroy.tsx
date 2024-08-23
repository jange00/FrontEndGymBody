import React, { useState } from 'react';

const PaymentsHistory = () => {
  // Hardcoded payment data for testing purposes
  const hardcodedPayments = [
    {
      membership: { name: 'John Doe', membershipId: 'M123456' },
      pakageplans: { packageName: 'Gold Plan' },
      paymentDate: '2023-08-01T00:00:00.000Z',
      paidAmount: 100.0,
      gymDetails: { contactNumber: '9876543210' },
    },
    {
      membership: { name: 'Jane Smith', membershipId: 'M789012' },
      pakageplans: { packageName: 'Silver Plan' },
      paymentDate: '2023-07-15T00:00:00.000Z',
      paidAmount: 80.0,
      gymDetails: { contactNumber: '9123456789' },
    },
    // Add more hardcoded payment data here if needed
  ];

  const [allPayments, setAllPayments] = useState(hardcodedPayments);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPayments, setFilteredPayments] = useState(hardcodedPayments);

  // Update filtered payments whenever searchTerm changes
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (!term) {
      setFilteredPayments(allPayments);
    } else {
      setFilteredPayments(
        allPayments.filter(
          (payment) =>
            payment.membership.name.toLowerCase().includes(term) ||
            payment.gymDetails.contactNumber.includes(term) // Search by contact number
        )
      );
    }
  };

  // Calculate total number of payments
  const totalPayments = filteredPayments.length;

  return (
    <div className="bg-primary text-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Payment History</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-96 p-2 rounded-xl text-black"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="overflow-y-auto max-h-64">
        <div className="mb-4 text-right text-sm">Total Payments: {totalPayments}</div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">S.N</th>
              <th className="py-2">Member Name</th>
              <th className="py-2">Member ID</th>
              <th className="py-2">Plan</th>
              <th className="py-2">Date Paid</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{payment.membership.name}</td>
                <td className="py-2">{payment.membership.membershipId}</td>
                <td className="py-2">{payment.pakageplans.packageName}</td>
                <td className="py-2">{new Date(payment.paymentDate).toLocaleDateString()}</td>
                <td className="py-2">{payment.paidAmount}</td>
                <td className="py-2">{payment.gymDetails.contactNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsHistory;
