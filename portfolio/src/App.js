import React from 'react';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideNav from './components/SideNav/SideNav';
import Backdrop from './components/Backdrop/Backdrop';
//import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <SideNav />
      <Backdrop />
      <main className="Main">
        <p>This is a paragraph content</p>
      </main>
    </div>
  );
}

export default App;