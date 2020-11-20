import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/nav";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio"
function App() {
  return (
    <Router>
        <Header />
        <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;