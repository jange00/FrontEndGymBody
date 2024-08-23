import { MdDeleteForever } from "react-icons/md";

const ShowEntities = () => {
  return (
    <div className="bg-primary text-white p-6 rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex items-center space-x-2 relative w-full md:w-auto mb-2 md:mb-0">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-xl w-full md:w-72 text-black"
          />
          <button className="absolute right-2 top-2 text-black">🔍</button>
        </div>
      </div>
      <div className="overflow-y-auto max-h-80">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Plan Name</th>
              <th className="py-2">Validity</th>
              <th className="py-2">Price</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2">Plan Name Placeholder</td>
              <td className="py-2">Validity Placeholder</td>
              <td className="py-2">Price Placeholder</td>
              <td className="py-2 flex justify-center">
                <button className="text-white py-2 flex items-center">
                  <MdDeleteForever className="text-red" />
                </button>
              </td>
            </tr>
            {/* Repeat the <tr> block for additional rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowEntities;
