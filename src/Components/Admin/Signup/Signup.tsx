
import { useNavigate } from "react-router-dom";
import singup from "../../../assets/loginlogo.png";

const Signup = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/admin/Signup/gymdetails"); // Navigate to the signup page
  };
  const handleLogin = () => {
    navigate("/admin/login");
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 bg-loginbgcolor">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 ">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={singup}
            alt="Body Garage Logo"
            className="w-96 h-96 object-contain"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-primary">Sign-up</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium">
                Username<span className="text-red">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-3 py-2 border focus:border-primary focus:ring-primary rounded-xl shadow-sm"
                placeholder="Username"
                required
              />
              
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email<span className="text-red">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border focus:border-primary focus:ring-primary rounded-xl shadow-sm"
                placeholder="email@example.com"
                
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Create Password<span className="text-red">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border focus:border-primary focus:ring-primary rounded-xl shadow-sm"
                placeholder="Create Password"
                required
              />
            
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium">
                Re-type Password<span className="text-red">*</span>
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 block w-full px-3 py-2 border focus:border-primary focus:ring-primary rounded-md shadow-sm"
                placeholder="Re-type Password"
                
              />
              
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md shadow-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleRegister}
            >
              Register
            </button>
            <div className="flex items-center mt-4">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-zinc-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-zinc-900 dark:text-zinc-300">
                Accept all the Terms and Conditions
              </label>
            </div>
            <p className="text-sm px-10 text-zinc-600 dark:text-zinc-400 mt-4">
              Already Have an Account?{" "}
              <button
                
                className="text-blue-600 hover:underline text-primary font-semibold underline underline-offset-3"
                onClick={handleLogin}
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
