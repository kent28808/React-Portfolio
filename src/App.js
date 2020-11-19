import React, { Component } from "react";
import Header from "./components/header"
import Footer from "./components/footer"
import Container from "./components/container"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Home from "./components/home"
import About from "./components/about"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <Container>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
