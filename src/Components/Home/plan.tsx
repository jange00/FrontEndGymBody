import React, { useEffect, useState } from "react";
import PlanCard from "../planscard/PlanCard";

const Plan = () => {
  // Use hardcoded data instead of fetching from an API
  const mockPlans = [
    { packagePlansId: 1, amount: "$50", packageName: "Basic Plan", validity: "1 Month" },
    { packagePlansId: 2, amount: "$130", packageName: "Standard Plan", validity: "3 Months" },
    { packagePlansId: 3, amount: "$250", packageName: "Premium Plan", validity: "6 Months" }
  ];

  // Set mock plans to state
  const [plans, setPlans] = useState(mockPlans);

  return (
    <>
      <div className="text-white py-14 bg-background-image">
        <div className="text-center mb-8 p-14">
          <h1 className="text-4xl font-bold">
            <span className="text-black">JOIN OUR </span> MEMBERSHIP
          </h1>
        </div>
        <ul className="flex flex-wrap justify-center space-x-0 md:space-x-6 space-y-6 md:space-y-0">
          {plans.map((plan) => (
            <li key={plan.packagePlansId} className="card gradient-class p-3 shadow-lg shadow-indigo-500/100 drop-shadow-2xl text-white w-32 m-2 md:w-auto">
              <PlanCard
                date={plan.amount} // Display the amount
                plans={plan.packageName} // Display the package name
                rate={plan.validity} // Display the validity
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Plan;
