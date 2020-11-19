import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/nav";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/about";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;