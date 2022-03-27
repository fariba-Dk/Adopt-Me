import {useState, useEffect} from 'react';

const localCache ={};

function useBreedList (animal) {

  const [breedList, setBreedList] = useState([])
  const [status, setStatus] = useState('unloaded')

  useEffect(()=>{
    if(!animal){
      setBreedList([])
    }else if(localCache[animal]){
      setBreedList(localCache[animal])
    }else{
      requestBreedList()//get from api
    }

    const requestBreedList = async()=>{

    setBreedList([])
    setStatus('...loading')

    const response = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)

    const data = response.json()
    //if no breeds
    localCache[animal]= data.breeds || [];

    setBreedList(localCache[animal])
    setStatus('loaded!')
    }
  },[animal])

  return[breedList, status];
}
export default useBreedList
