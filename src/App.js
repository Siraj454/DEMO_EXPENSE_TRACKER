import React from 'react';
import './App.css';
import Child from './child';
import {TransProvider} from './transactionContext';


function App() {
  return (
    <TransProvider>
  
      <Child/>
  
    </TransProvider>
      
    
  );
}

  export default App;