"use client";

const Searchbar = () => {
  const handleSubmit = () => {};

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
      />

      <button type="submit" className="searchbar-btn">
        Search
      </button>
    </form>
  );
};

export default Searchbar