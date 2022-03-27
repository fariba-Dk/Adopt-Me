import {useState, useEffect} from 'react';
import Pet from './Pet';
import useBreedList from '../hooks/useBreedList'


//upper case because it never changes
const ANIMALS = ["bird", "cat", "dog","rabbit", "reptile", "snake"]
const LOCATIONS = ["WA", "CA", "NY","OR", "NM", "Tx"]

const SearchParams = () =>{

  const [location, updateLocation]=useState("")
  const [animal, updateAnimal] = useState("")//leave blank we have not selected
  const [breed, updateBreed]= useState("")

  const [pets, updatePets]= useState([])

  const [breeds] = useBreedList(animal)//we make an api call to get it



  //useEffect hook
  useEffect(()=>{
    requestPets()
  },[]);//hey when should you rerun? if we dont give it [], it would rerun => infinite loops to avoid add []

  async function requestPets(){

    //http://pets-v2.dev-apis.com/pets?animal

    const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed})`);

    const data = await response.json()
    console.log('this is my pet data', data.pets)

    updatePets(data.pets);

  }

// component RETURNS here
  return(
    <div className="search-params">
    {/* location */}
      <form
      onSubmit={(e)=>{
        e.preventDefault() //have to prevent it from submitting or its going to refresh the page
        requestPets()
      }}>
        <label htmlFor="location">Location
          <select

            id="animal"

            onSelect={(e)=>updateLocation(e.target.value)}
            value={location}
            // onBlur={(e)=>updateLocation(e.target.value)}
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


            {/* animals */}
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onSelect={(e)=>updateAnimal(e.target.value)}
            onBlur={(e)=>updateAnimal(e.target.value)}
            >
              <option value=""></option>
            {/* j a v a s c r i p t */}
            {ANIMALS.map((animal) =>(
              <option
              key={animal}
              value={animal}>
              {animal}
            </option>
            ))}

           </select>
        </label>

        {/* breed */}

        <label htmlFor="breed">Breed
          <select
          disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e)=>updateBreed(e.target.value)}
            onBlur={(e)=>updateBreed(e.target.value)}>
            <option value=""></option>
              {breeds.map((breed)=>(
                <option
                key={breed} value={breed}>
                  {breed}
                </option>
              ))}
          </select>
        </label>
        <button>Submit</button>
      </form>


      {/* now once the submit is clicked we need to get pet */}
      {pets.map((pet)=>(
        <Pet
          key={pet.id}/>

      ))}



    </div>

  )
}
export default SearchParams;
