import React from "react";
import { Link, Route } from "react-router-dom";
import ContactCard from "../contact";

function Contact(props) {
  return (
    <div>
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link bg-light">
      
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link bg-light">
        
      </Link>
    

      <ContactCard />

    </div>
  );
}

export default Contact;