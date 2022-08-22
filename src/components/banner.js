import React from "react";
import PlaceholderImg from '../images/lights.jpg'

//page content
import JSONData from "../content/Content.json"


const Banner = ( {data} ) => {
    console.log(data);
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">
                       <h1>{JSONData.introTitle}</h1>
                    </div>
                    <div className="sub-text">
                        <p>{JSONData.introDesc}</p>
                    </div>
                </div>
                <div className="main-img">
                    <img src={PlaceholderImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Banner;

