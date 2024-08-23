import dashboardlogo from "../../../assets/dashboard.png";

const Dashboard = () => {
  
  return (
    <div className="p-4 space-y-4 h-screen bg-loginbgcolor">
      <div className="bg-primary text-white p-6 rounded-2xl flex justify-between items-center">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Welcome to Body Garage</h2>
          <p className="mt-2">
            A gym is a facility equipped with exercise machines, weights, and spaces for physical fitness activities, designed to help individuals improve their health and fitness levels.
          </p>
        </div>
        <div className="flex w-40 h-40 rounded-full">
          <img src={dashboardlogo} alt="Dashboard Logo" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
