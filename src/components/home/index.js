import React from "react";
import Profile from "../../assets/profile.jpg"
const skills = [
    {
        img:"https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png",
        title: ""
    },
    {
        img:"https://p.kindpng.com/picc/s/171-1718046_javascript-programming-language-logo-hd-png-download.png",
        title: ""
    },
    {
        img:"https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png",
        title: ""
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png",
        title: ""
    },
    {
        img:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
        title: ""
    },
    {
        img:"https://miro.medium.com/max/1400/1*vwAe0QwGV9nOupl61bbmqw.jpeg",
        title: ""
    },

]

function Home() {
    return (


        <div className="row justify-content-center">
            <div className="col-12 d-flex flex-column align-items-center">

                <div className="card card-home ">
                    <div className="card-body">
                        <img src={Profile} alt="home-profile-photo" className="home-profile-photo mb-3 w-100"></img>
                        <h5 className="card-title text-center">Full Stack Web developer</h5>
                        <a href="https://github.com/kent28808" className="ml-5">Github</a>
                    </div>
                </div>
                <div className="row">
                    {skills.map(skill=>(
                        <div className="col-4">
                            <SkillCard img={skill.img} title={skill.title}/>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>



    );
}

function SkillCard(props){
    return (
        <div className="card">
             <div className="card-body">
                <img className="w-100"src= {props.img}/>
                <h6>{props.title}</h6>
            </div>
            
        </div>
    )
}

export default Home;