import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { CountStore } from './Utilities/CountStore';
import Card from './Components/Card';
import Holder from './Components/Holder';

const App = () => {

 
  return (
    
      
      <Provider store={CountStore}>
        <Holder/>
      </Provider>
    
  );
};

export default App;