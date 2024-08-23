import landing from "../../assets/LandingPage.jpg";
const Home = () => {
  return (
    <>
      <div>
        <div
          className="bg-cover bg-center h-screen mx-auto flex"
          style={{ backgroundImage: `url(${landing})` }}
        >
          <div className="px-20 py-64">
            <h1 className="text-white font-bold font-serif text-3xl flex ">
              Repair Your Body Here!
            </h1>
            <h2 className="text-white  font-bold font-serif text-2xl flex">
              Come Join Us!
            </h2>
            <div className="px-0 py-1 flex">
              <button className="bg-primary text-white font-serif rounded-3xl py-2 px-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-75">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home