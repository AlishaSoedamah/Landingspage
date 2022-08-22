import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";



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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit voluptatibus consequuntur saepe doloribus accusantium? Voluptas assumenda sit qui, expedita, reiciendis ut, possimus labore fugit minima enim natus unde voluptatum. Laudantium qui architecto, voluptas aliquid pariatur fuga unde quidem eum placeat voluptatibus, cupiditate consequuntur natus delectus soluta incidunt ex ipsa.
                    </div>
                </div>
                <div className="main-img">
                    <GatsbyImage src={data.file.publicUrl} />
                </div>
            </div>
        </div>
    );
}

export const HomepageQuery = graphql`
query HomepageQuery {
    file(relativePath: {eq: "lights.jpg"}) {
      publicURL
    }
  }
  
`
export default Banner;

