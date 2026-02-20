// When search bar is blank it throws an error
const SearchBar = ({ searchCity, setSearchCity, handleSubmit }) => { 
    return (
        <form onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 mb-6"
        >
        <label htmlFor="searchCity">Enter city here</label>
        <input 
        type="text" name="searchCity" id="searchCity" placeholder="Enter Location Here" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} className="flex-1 px-4 py-2 border border-yellow-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500" 
        />
        <button type="submit"
        className="px-4 py-2 bg-yellow-300 text-white rounded-lg hover:bg-yellow-400 transition">
          {/* Come back later to add magnifying glass to input box
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> 
          </svg> */}

          Search for Weather</button>
      </form>
  )
  
}

export default SearchBar