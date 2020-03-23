import React, { Component } from 'react';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideNav from './components/SideNav/SideNav';
import Backdrop from './components/Backdrop/Backdrop';
//import Footer from './Footer/Footer';

class App extends Component {
  state = {
    sideNavOpen: false
  };

  sideNavToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideNavOpen: !prevState.sideNavOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideNavOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideNavOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App">
        <Toolbar sideNavClickHandler={this.sideNavToggleClickHandler} />
        <SideNav show={this.state.sideNavOpen} />
        {backdrop}
        <main className="Main">
          <p>This is a paragraph content</p>
        </main>
      </div>
    );
  };
}

export default App;