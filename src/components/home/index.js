import React from "react";


function Home() {
    return (


        <div className="row row-home">
            <div className="col-4">

                <div className="card card-home">
                    <div className="card-body">
                        <img src={HomeProfile} alt="home-profile-photo" className="ome-profile-photo mb-3"></img>
                        <h5 className="card-title text-center">Full Stack Web developer</h5>
                        <a href="https://github.com/kent28808" className="ml-5">Github</a>
                    </div>
                </div>

            </div>
        </div>



    );
}

export default Home;