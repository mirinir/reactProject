import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main1 from './component/mainComponent'
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
   <div><Provider store={store}>
     <Main1></Main1>
   </Provider>

</div>
    

  );
}

export default App;