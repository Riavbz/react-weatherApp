const SearchBar = ({ searchCity, setSearchCity, handleSubmit }) => { 
    return (
        <form onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 mb-6"
        >
        <input 
        type="text" name="searchCity" id="searchCity" placeholder="Enter Location Here" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} className="flex-1 px-4 py-2 border border-yellow-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500" 
        />
        <button type="submit"
        disabled={!searchCity.trim()}
        className="px-4 py-2 bg-yellow-300 text-white rounded-lg hover:bg-yellow-400 transition disabled:bg-gray-400">

          Search for Weather</button>
      </form>
  )
  
}

export default SearchBar