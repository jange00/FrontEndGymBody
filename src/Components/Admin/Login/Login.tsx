import logo from "../../../assets/loginlogo.png";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/admin/Signup"); // Navigate to the signup page
  };

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Perform any login logic here
    navigate("/admin/dashboard"); // Navigate to the dashboard on successful login
  };

  const handleforget = () => {
    navigate ("/admin/ForgetPassword")
  }
  
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 bg-loginbgcolor">
        <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 max-w-5xl">
          <div className="w-96 h-auto">
            <img src={logo} alt="Body Garage Logo" className='w-96 h-96 object-contain' />
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-4 text-primary">Sign-in</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red block text-sm font-medium text-slate-700">Email</span>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-xl sm:text-sm focus:ring-2"
                    placeholder="email@example.com"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Password<span className="text-red">*</span></label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full px-3 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary focus:ring-2"
                  placeholder="password"
                />
              </div>
              <div className="flex items-center space-x-12 justify-between">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-zinc-300 rounded dark:bg-zinc-700 dark:border-zinc-600" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-900 dark:text-zinc-300">Remember me</label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                  onClick={handleforget}
                  >Forgot Password?</a>
                </div>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-3xl shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600">
                Login
              </button>
            </form>
            <div className="text-sm text-center">
              <span className="font-medium text-blue-600 hover:text-blue-500">
                Don't Have an Account?
                <button className='font-semibold underline underline-offset-3 px-2 text-primary h-9' onClick={handleSignUp}>Sign Up</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
