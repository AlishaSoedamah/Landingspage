import React from "react";
import PlaceholderImg from '../images/lights.jpg'

const Banner = ( {data} ) => {
    console.log(data);
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">
                       <h1>The future in our hands</h1>
                    </div>
                    <div className="sub-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit voluptatibus consequuntur saepe doloribus accusantium? Voluptas assumenda sit qui, expedita, reiciendis ut, possimus labore fugit minima enim natus unde voluptatum. Laudantium qui architecto, voluptas aliquid pariatur fuga unde quidem eum placeat voluptatibus, cupiditate consequuntur natus delectus soluta incidunt ex ipsa.</p>
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

