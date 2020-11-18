import React, { Component } from "react";
import Header from "./components/header"
import Footer from "./components/footer"
import Container from "./components/container"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
      <Footer/>
    </div>
  );
}


export default App;
