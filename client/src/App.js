import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/configureStore';
import Posts from './container/Posts';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Rebi-Blog</h1>
        <Posts></Posts>
      </div>
    </Provider>
  );
}

export default App;
