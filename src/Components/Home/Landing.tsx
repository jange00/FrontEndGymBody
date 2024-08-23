import Coaches from "./Coaches";
import Home from "./Home";
import Register from "./Register";
import About from "./about";
import Plan from "./plan";
import Visit from "./visit";

function Landing() {
  return (
    <>
      <Home/>
      <About/>
      <Plan/>
      {/* <Coaches/> */}
      <Visit/>
      
    </>
  );
}
export default Landing;
