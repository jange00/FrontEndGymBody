import bodybg from "../../assets/mainlogo.png";
import nutritionPlan from "../../assets/Nutritionplan.png";

const About = () => {
  return (
    <>
      <div className="bg-custom-gradient3 min-h-screen flex flex-col justify-center items-center ">
      <div className="text-center mb-4">
        <h3 className="text-white font-bold font-serif text-md">About</h3>
        <h2 className="text-white font-bold font-serif text-3xl tracking-widest">
          BODY GARAGE FITNESS CENTER FOR MAN & WOMAN
        </h2>
      </div>
        <div className="flex flex-col lg:flex-row  items-center justify-center">
          <div className="flex-1 p-4 lg:p-0">
            <img src={bodybg} alt="Body Garage" className=" lg:w-auto" />
          </div>
          <div className="flex-1 text-center lg:text-left p-4 lg:p-0">
            <p className="font-serif text-white text-xs md:text-sm text-justify pr-0 lg:pr-12">
              Body Garage: Where Your Fitness Journey is Fine-Tuned" is a gym
              that embodies the spirit of transformation and optimization, much
              like a garage for the body. At Body Garage, we believe that every
              individual has the potential to achieve peak physical condition
              through tailored fitness programs, expert guidance, and
              state-of-the-art facilities. Our gym offers a wide range of
              services including strength training, cardio workouts, functional
              training, flexibility and mobility sessions, and personalized
              fitness assessments
            </p>
            {/* <h2 className="text-black text-2xl font-serif mt-4">
              <span className="text-white">JOIN</span> OUR MEMBERSHIP
            </h2> */}
            <div className="">
            <h1 className="mt-6 text-lg md:text-xl lg:text-2xl text-white">
              What We Offer:
            </h1>
            </div>
              
            <div className="flex flex-wrap justify-center lg:justify-start items-start gap-6 mt-4 ">
              <div className="card bg-gradient-to-b from-white to-blue-800 p-3 rounded-lg w-36 bg-indigo-500 shadow-lg shadow-indigo-500/50 drop-shadow-2xl rounded-[25px]">
                <div className="card-border border-2 border-black rounded-lg p-3 text-left bg-indigo-500 shadow-lg shadow-indigo-500/50 ">
                  <h1 className="text-4xl text-white">
                    24
                    <br />
                    /7<sub className="text-base text-white">Chat</sub>
                    {/* &hearts; */}
                  </h1>
                </div>
              </div>

              <div className="card bg-gradient-to-b from-white to-blue-800 p-3 rounded-lg w-36 bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-[25px]">
                <div className="card-border border-2 border-black rounded-lg p-3 text-left bg-indigo-500 shadow-lg shadow-indigo-500/50 ">
                  <h1 className="text-4xl text-white">
                    1 on 1 <sub className="text-base text-white">Coaching</sub>
                  </h1>
                </div>
              </div>

              <div className="card bg-gradient-to-b from-white to-blue-800 p-3 rounded-lg w-36 bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-[25px]">
                <div className="card-border border-2 border-black rounded-lg p-2 text-left bg-indigo-500 shadow-lg shadow-indigo-500/50">
                  <h1 className="">
                    <img
                      src={nutritionPlan}
                      alt="Nutrition Plan"
                      className="w-8 h-8 mx-16 mb-2"
                    />
                    <sub className="text-base text-white">Nutrition Plan</sub>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
