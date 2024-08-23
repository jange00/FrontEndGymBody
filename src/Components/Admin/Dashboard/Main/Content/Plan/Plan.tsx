import React from "react";
import AddPlan from "./AddPlan";
import ShowEntities from "./ShowEntities";

const Plans = () => {
  return (
    <div className="p-6 bg-loginbgcolor ">
      <h2 className="text-4xl font-bold text-primary pl-1 mb-4">Add Plan</h2>
      <AddPlan/>
      <ShowEntities/>
    </div>
  );
};

export default Plans;
