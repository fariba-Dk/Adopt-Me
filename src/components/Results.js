import Pet from './Pet';


function Results ({pets}){

  return (
    <div className='search'>

    {/* if no pets then "no pets found! else return the bellow" */}

    {!pets.length ? (<h2>Sorry No Pets Today!</h2>) :

      (pets.map((pet)=>(

        <Pet
          animal={pet.animal}
          key={pet.id}
          name={pet.name}
          breed={pet.breed}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
          id={pet.id}
        />)))}




    </div>

  )
}
export default Results;
