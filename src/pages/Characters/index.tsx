import React, { useEffect, useState} from 'react';
import api from '../../services/api';
import { Container, CardList, Card } from './styles';


interface ResponseData {
  gender: string;
  name: string;
  id: string;
  description: string;
  

}

const Characters: React.FC = () => {
   const [characters, setCharacters] = useState<ResponseData[]>([]);


    useEffect(()=> {
      api
      .get('/characters')
      .then(response => {
        setCharacters(response.data);
        console.log('segundo log', characters);
      })
      .catch(err => console.log(err));
    },[]);

    return (
      <Container>
        <CardList>                
          {characters.map(character => {
            return (
              <Card key={character. id}>
                
                <h2>{character. name} </h2>
                <p> {character.gender} </p>
              </Card>

            );
          })};
        

      </CardList>

        
        
     
      </Container>
    );
    ;



};




export default Characters;