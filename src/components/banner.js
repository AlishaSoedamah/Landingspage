import React from 'react'
// import { graphql } from 'gatsby'
// import Img from "gatsby-image"

const Banner = () => {
//  const query = graphql`
//     query {
//         lights(relativePath: { eq: "lights.jpg" }) {
//         childImageSharp {
//             fixed(width: 300) {
//             ...GatsbyImageSharpFixed
//             }
//         }
//         }
//     }
// `
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
                        {/* // <Img fixed={data.lights.childImageSharp.fixed} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;