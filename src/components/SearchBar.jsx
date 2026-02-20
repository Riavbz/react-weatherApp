
// When search bar is blank it throws an error
const SearchBar = ({ searchCity, setSearchCity, handleSubmit }) => { 
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="searchCity">Enter city here</label>
        <input 
        type="text" name="searchCity" id="searchCity" placeholder="New Jersey" value={searchCity} onChange={(e) => setSearchCity(e.target.value)} />
        <button type="submit">Search for Weather</button>
      </form>
  )
}

export default SearchBar