import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="bg-health-400 p-3 rounded-lg shadow-lg text-white max-w-6xl mx-32 my-24 mb-0">
      <div className="flex items-center bg-white p-2 rounded-md shadow-md w-full">
        <input
          type="text"
          placeholder="Search Datasets"
          className="flex-grow p-2 outline-none text-gray-700"
        />
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500">
          Search
        </button>
      </div>
      
      
      <div className="bg-white p-4 mt-4 rounded-md shadow-md text-gray-800 flex items-center">
        <div className="flex items-center gap-2">
          <img src="src\pages\analytics.png" alt="Analytics" className="w-10" />
          <h2 className="text-lg font-bold text-green-500">ANALYTICS</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 flex-grow text-center text-sm">
          <div><span className="font-bold text-lg">100+</span><br />RESOURCES</div>
          <div><span className="font-bold text-lg">50+</span><br />CATALOG</div>
          <div><span className="font-bold text-lg">100+</span><br />DOWNLOADED</div>
          <div><span className="font-bold text-lg">1000+</span><br />VIEWES</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;