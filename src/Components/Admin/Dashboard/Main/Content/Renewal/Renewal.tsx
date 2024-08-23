import React, { useState } from 'react';

interface Plan {
  packagePlansId: number;
  packageName: string;
  amount: number;
  validity: string;
}

const RenewalForm = ({ membershipId, paymentsId, closeModal }) => {
  const [plans, setPlans] = useState<Plan[]>([
    { packagePlansId: 1, packageName: "Basic Plan", amount: 50, validity: "1 month" },
    { packagePlansId: 2, packageName: "Standard Plan", amount: 100, validity: "3 months" },
    { packagePlansId: 3, packageName: "Premium Plan", amount: 200, validity: "6 months" }
  ]);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [amount, setAmount] = useState<number | undefined>();
  const [gymId] = useState<number>(123); // Static gymId

  const handlePlanChange = (e) => {
    const selectedPlanName = e.target.value;
    setSelectedPlan(selectedPlanName);

    // Find the selected plan in the plans array and set the amount
    const selectedPlanDetails = plans.find(plan => plan.packageName === selectedPlanName);
    setAmount(selectedPlanDetails?.amount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount);
    console.log(plans.find(plan => plan.packageName === selectedPlan)?.packagePlansId);
    console.log(gymId);

    // Here, instead of sending data to the backend, we'll log the data
    const paymentData = {
      membershipId: membershipId,
      packagePlansId: plans.find(plan => plan.packageName === selectedPlan)?.packagePlansId,
      paidAmount: amount,
      gymId: gymId
    };

    console.log('Payment data:', paymentData);

    // Simulate successful submission and close modal
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-loginbgcolor p-6 rounded-xl shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Renew</h1>

        <div className="bg-primary p-4 md:p-8 rounded-xl shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
              <div className="flex-1">
                <label className="block text-white mb-2" htmlFor="plan">Plan</label>
                <select
                  className="w-full p-2 rounded-xl"
                  id="plan"
                  value={selectedPlan}
                  onChange={handlePlanChange}
                  required
                >
                  <option value="">Choose a plan</option>
                  {plans.map(plan => (
                    <option key={plan.packagePlansId} value={plan.packageName}>
                      {plan.packageName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <label className="block text-white mb-2" htmlFor="price">Price</label>
                <input
                  className="w-full p-2 rounded-xl"
                  type="number"
                  id="price"
                  placeholder="Enter price"
                  value={amount || ''}
                  readOnly
                  required
                />
              </div>
            </div>

            <div className="flex justify-end md:justify-start space-x-4 pl-64">
              <button onClick={handleSubmit} className="bg-white py-2 px-4 md:px-8 rounded-xl shadow-md">Save</button>
              <button type="button" className="bg-white py-2 px-4 md:px-8 rounded-xl shadow-md" onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RenewalForm;
