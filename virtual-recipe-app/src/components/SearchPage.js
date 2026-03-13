import React from "react";

function SearchPage({ search, setSearch, onSearch }) {

const handleSubmit = (e) => {
  e.preventDefault();
  onSearch();
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div className="flex mb-6">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search here"
      className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-800 focus:ring-4
       focus:ring-blue-200 focus:outline-none"
      />

      <button
        onClick={onSearch}
        className="min-w-48 bg-blue-800 text-white p-3 rounded-lg border-spacing-2 hover:bg-blue-800 transition"
      >
        Search
      </button>
      </div>

    </form>
  );
}

export default SearchPage;