import React from 'react';
import './App.css';
import UserList from './components/UserList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management App</h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
};

export default App;