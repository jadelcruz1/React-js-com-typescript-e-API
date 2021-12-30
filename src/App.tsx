import React from 'react';
import GlobalStyle from './styles/global';

import Characters from './pages/Characters';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';






const App:React.FC = () => {

 return(
      <>    
            <Header />
            <Characters />
            <GlobalStyle /> 

      </>
  );     
      
 };


export default App;