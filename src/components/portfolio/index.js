import React from "react";



function Portfolio(props) {
    return (
        <div className="card port-card">
            <div className="img-container">

                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Project:</strong> {props.project}
                    </li>
                    <li>
                        <strong>Demo:</strong> <a href={props.location}>{props.location}</a>
                    </li>

                </ul>
            </div>

        </div>
    );
}

export default Portfolio;