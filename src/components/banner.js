import React from "react";

// import StaticImage from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"

const Banner = () => {

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">
                       <h1>The future in our hands</h1>
                    </div>
                    <div className="sub-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit voluptatibus consequuntur saepe doloribus accusantium? Voluptas assumenda sit qui, expedita, reiciendis ut, possimus labore fugit minima enim natus unde voluptatum. Laudantium qui architecto, voluptas aliquid pariatur fuga unde quidem eum placeat voluptatibus, cupiditate consequuntur natus delectus soluta incidunt ex ipsa.
                    </div>
                    <div className="main-img">
                        <StaticImage
                        src="../images/lights.jpg"
                        width={300} 
                        alt="Lights"
                        placeholder="blurred"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;