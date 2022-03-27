import {useState} from 'react';

//upper case because it never cchanges
const ANIMALS = ["bird", "cat", "dog","rabbit", "reptile", "snake"]
const LOCATIONS = ["WA", "CA", "NY","OR", "NM", "Tx"]

const SearchParams = () =>{
  const [location, setLocation]=useState("")
  const [animal, setAnimal] = useState("")//leave blank we have not selected

  return(

    <div className="search-params">
      <form>
      <label htmlFor="location">Location
      <select
        id="animal"
        value={location}
        onSelect={(e)=>setLocation(e.target.value)}
        onBlur={(e)=>setLocation(e.target.value)}
        >
        <option value=""></option>
            {/* j a v a s c r i p t */}
            {LOCATIONS.map((location) =>(
            <option
            key="location"
            value={location}>
            {location}
        </option>))}
        </select>
        </label>
        <button>Submit</button>
      {/* </form> */}
{/*
      <form> */}
        <label htmlFor="animal">
        Animal
          <select
            id="animal"
            value={animal}
            onSelect={(e)=>setAnimal(e.target.value)}
            onBlur={(e)=>setAnimal(e.target.value)}
            >
            <option/>
            {/* j a v a s c r i p t */}
            {ANIMALS.map((animal) =>(
              <option
              key="animal"
              value={animal}>
              {animal}
            </option>))}
           </select>
          </label>
        <button>Submit</button>
      </form>
    </div>

  )
}
export default SearchParams
