import React, { useEffect, useState} from 'react';
import api from '../../services/api';
import { Container, CardList, Card } from '../../Characters/styles';


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
      .get('./characters')
      .then(response => {
        setCharacters(response.data.results);
        console.log('segundo log', characters);
      })
      .catch(err => console.log(err));
    },[]);

    return (
      <Container>
        <CardList>

          {characters.map(character => {
            return (
              <Card key={character.id}>
                <div id="img" />
                <h2> {character.name}</h2>
                <p>{character.description}</p>
              </Card>

            )
          }
            
            )}

        </CardList>

        
        
     
      </Container>
    );
    ;



};




export default Characters;