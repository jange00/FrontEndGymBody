
import sushantcoach from "../../assets/sushantcoach.jpg";

const Coaches = () => {
  return (
    <>
      <div className="bg-custom-gradient2 min-h-screen flex flex-col justify-center items-center">
        <div className="text-center mb-4">
          <h3 className="text-white font-bold text-4xl underline">Coaches</h3>
        </div>
        <div className="flex flex-wrap justify-center space-x-0 sm:space-x-12 space-y-4 sm:space-y-0">
          {/* Box 1 */}
          <div className="bg-custom-gradient text-white p-6 shadow-lg flex flex-col items-center rounded-[40px] w-64 sm:w-auto m-2">
            <img src={sushantcoach} alt="Sushant Mahato" className="w-24 h-24 rounded-full mb-4 p-2 "/>
            <p className="text-center">Sushant Mahato1</p>
          </div>
          {/* Box 2 */}
          <div className="bg-custom-gradient text-white p-6 shadow-lg flex flex-col items-center rounded-[40px] w-64 sm:w-auto m-2">
            <img src={sushantcoach} alt="Sushant Mahato" className="w-24 h-24 rounded-full mb-4 p-2"/>
            <p className="text-center ">Sushant Mahato2</p>
          </div>
          {/* Box 3 */}
          <div className="bg-custom-gradient text-white p-6 shadow-lg flex flex-col items-center rounded-[40px] w-64 sm:w-auto m-2">
            <img src={sushantcoach} alt="Sushant Mahato" className="w-24 h-24 rounded-full mb-4 p-2"/>
            <p className="text-center ">Sushant Mahato3</p>
          </div>
          {/* Box 4 */}
          <div className="bg-custom-gradient text-white p-6 shadow-lg flex flex-col items-center rounded-[40px] w-64 sm:w-auto m-2">
            <img src={sushantcoach} alt="Sushant Mahato" className="w-24 h-24 rounded-full mb-4 p-2"/>
            <p className="text-center ">Sushant Mahato4</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coaches;
