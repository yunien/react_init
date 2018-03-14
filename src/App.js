import React, { Component } from "react";
import Routes from "./Routes";
import "./App.less";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar> */}
        <Routes />
      </div>
    );
  }
}

export default App;
