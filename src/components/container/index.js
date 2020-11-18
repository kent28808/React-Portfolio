import React from "react";

function Container({children}){
    return (
    
        <div className="container mt-5 h-100 pt-3">
            {children}
        </div>
    
    )
}

export default Container;