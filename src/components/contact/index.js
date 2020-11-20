import React from "react";
// import ContactPNG from ""

function ContactCard(props) {
    return (

        <div className="contact-card">

            <div className="card">
                <h1 className="text-center">Contact Me</h1>
                <div className="card-content">

                    <a href="mailto:webmaster@kent28808@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

                    <a href="https://github.com/kent28808" className="ml-4 mt-4 font-weight-bold">GitHub</a>

                    {/* <img src={ContactPNG} alt="profile-photo" className="profile float-left"></img> */}
                </div>
            </div>
        </div >


    );
}

export default ContactCard;