import React, { useEffect } from 'react';
import axios from 'axios' 



const baseURL = 'https://psychonauts-api.herokuapp.com/api/characters?limit=50';



const App:React.FC = () => {

  useEffect(()=> {
    axios.get(
      'https://psychonauts-api.herokuapp.com/api/characters?limit=50;')
      .then(response=> console.log(response.data))
      .catch(err=> console.log(err));

    },[]);

      return<div> vou conseguir</div>;   
  
};


export default App;