import React, { useState, useEffect } from 'react';
import { MdDeleteForever } from "react-icons/md";
import RenewalForm from '../Renewal/Renewal';
import dayjs from 'dayjs';

const ViewMembers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredActiveMembers, setFilteredActiveMembers] = useState([]);
  const [filteredInactiveMembers, setFilteredInactiveMembers] = useState([]);
  const [activeTab, setActiveTab] = useState('active'); // 'active' or 'inactive' members
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [memberToRenew, setMemberToRenew] = useState(null);

  // Mock data for members
  const mockPaymentsData = [
    {
      membership: {
        membershipId: '1',
        name: 'John Doe',
        contactNumber: '1234567890',
        dateOfJoin: '2023-01-15',
      },
      expireDate: '2024-01-15',
    },
    {
      membership: {
        membershipId: '2',
        name: 'Jane Smith',
        contactNumber: '0987654321',
        dateOfJoin: '2023-02-20',
      },
      expireDate: '2023-05-20',
    },
    // Add more mock members as needed
  ];

  useEffect(() => {
    const today = dayjs();
    const activeMembers = [];
    const inactiveMembers = [];

    mockPaymentsData.forEach((member) => {
      const expired = dayjs(member.expireDate);
      if (expired.isBefore(today)) {
        inactiveMembers.push({
          ...member,
          expireDate: expired.format('YYYY/MM/DD')
        });
      } else {
        activeMembers.push({
          ...member,
          expireDate: expired.format('YYYY/MM/DD')
        });
      }
    });

    setFilteredActiveMembers(activeMembers);
    setFilteredInactiveMembers(inactiveMembers);
  }, []);

  // Function to switch between active and inactive members
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchTerm(''); // Reset search term when switching tabs
  };

  // Function to delete a member
  const handleDelete = (id) => {
    if (activeTab === 'active') {
      setFilteredActiveMembers(filteredActiveMembers.filter(member => member.membership.membershipId !== id));
    } else {
      setFilteredInactiveMembers(filteredInactiveMembers.filter(member => member.membership.membershipId !== id));
    }
  };

  // Function to renew the members
  const handleRenew = (member) => {
    setMemberToRenew(member);
    setShowConfirmationModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setMemberToRenew(null);
    window.location.reload();
  };

  const confirmRenewal = () => {
    setShowConfirmationModal(false);
    setShowModal(true);
  };

  const cancelRenewal = () => {
    setShowConfirmationModal(false);
    setMemberToRenew(null);
  };

  // Update the members when search term changes
  useEffect(() => {
    const filteredActive = mockPaymentsData.filter(member =>
      member.membership.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.membership.contactNumber.replace(/\s/g, '').includes(searchTerm.replace(/\s/g, ''))
    );
    setFilteredActiveMembers(filteredActive.filter(member => !dayjs(member.expireDate).isBefore(dayjs())));

    const filteredInactive = mockPaymentsData.filter(member =>
      member.membership.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.membership.contactNumber.replace(/\s/g, '').includes(searchTerm.replace(/\s/g, ''))
    );
    setFilteredInactiveMembers(filteredInactive.filter(member => dayjs(member.expireDate).isBefore(dayjs())));
  }, [searchTerm]);

  // Select members based on activeTab
  const membersToShow = activeTab === 'active' ? filteredActiveMembers : filteredInactiveMembers;

  return (
    <div className="p-6 bg-loginbgcolor h-screen">
      <h1 className="text-4xl font-bold text-primary mb-4">Gym Members</h1>
      <div className="bg-primary text-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-80 p-2 rounded-lg text-black items-center"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex">
            <button
              className={`flex items-center px-4 py-2 rounded-l-xl ${activeTab === 'active' ? 'text-green' : 'text-green'}`}
              onClick={() => handleTabChange('active')}
            >
              Active
              <span className="ml-2 w-2 h-2 bg-green rounded-full"></span>
            </button>
            <button
              className={`flex items-center px-4 py-2 rounded-r-xl ${activeTab === 'inactive' ? 'text-red' : 'text-red'}`}
              onClick={() => handleTabChange('inactive')}
            >
              Inactive
              <span className="ml-2 w-2 h-2 bg-red rounded-full"></span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto max-h-80">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">S.N</th>
                <th className="py-2">Member Name</th>
                <th className="py-2">Member ID</th>
                <th className="py-2">Contact Number</th>
                <th className="py-2">Date Enrolled</th>
                <th className="py-2">{activeTab === 'active' ? 'Expire Date' : 'Expired Date'}</th>
                <th className="py-2">Status</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {membersToShow.map((member, index) => (
                <tr className="border-t" key={member.membership.membershipId}>
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{member.membership.name}</td>
                  <td className="py-2">{member.membership.membershipId}</td>
                  <td className="py-2">{member.membership.contactNumber}</td>
                  <td className="py-2">{dayjs(member.membership.dateOfJoin).format('YYYY/MM/DD')}</td>
                  <td className="py-2">{member.expireDate}</td>
                  <td className="py-2 flex items-center">
                    {activeTab === 'active' ? (
                      <>
                        <span className="w-2 h-2 bg-green rounded-full mr-2"></span>
                        Active
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 bg-red rounded-full mr-2"></span>
                        Inactive
                      </>
                    )}
                  </td>
                  <td className="py-2">
                    {activeTab === 'inactive' && (
                      <button className="bg-red text-white px-4 py-1 rounded-lg" onClick={() => handleRenew(member)}>Renew</button>
                    )}
                    <button
                      className="text-white ml-5"
                      onClick={() => handleDelete(member.membership.membershipId)}
                    >
                      <MdDeleteForever className="ml-1 text-red" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <RenewalForm membershipId={memberToRenew?.membership.membershipId} closeModal={closeModal} paymentsId={memberToRenew?.paymentsId} />
      )}

      {showConfirmationModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Confirm Renewal</h2>
            <p className="mb-4">Are you sure you want to renew the membership for {memberToRenew?.membership.name}?</p>
            <div className="flex justify-end space-x-4">
              <button className="bg-green text-white px-4 py-2 rounded-lg" onClick={confirmRenewal}>Yes</button>
              <button className="bg-red text-white px-4 py-2 rounded-lg" onClick={cancelRenewal}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMembers;
