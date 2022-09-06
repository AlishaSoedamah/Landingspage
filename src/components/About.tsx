import * as React from "react"

//import content 
import JSONData from "../content/Content.json"

const About = () => (
    <div className="container">
        <div className="about">
            <h1 className="about-title">{JSONData.aboutTitle}</h1>
            <div className="about-blurb">
                <p>{JSONData.aboutContent}</p>
            </div>
            <div className="services">
                <span>soon there will be more available</span>
            </div>
        </div>
    </div>
)

export default About;