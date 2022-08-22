import * as React from "react" 
import PlaceholderImg from '../images/lights.jpg'

const Product = () => (
    <div className="container">
        <h1>our product</h1>
        <div className="main-product-blurb">
            <div className="product-blurb__img">
                <img src={PlaceholderImg} alt="" />
            </div>
            <div className="product-blurb">
                <h3>Sub-heading</h3>
                <div className="product-blurb__text-block">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus sit, facilis dolorum ipsum excepturi voluptas praesentium commodi cupiditate minima repellendus sint soluta iure a harum ab vitae laudantium modi dolor nam quis totam tenetur. Architecto deserunt dolor quod earum quidem! Explicabo, officiis. Cupiditate, beatae. Repellendus quasi tenetur in odit corporis. Cum ipsum modi sed sapiente quaerat saepe soluta corporis consequatur. Earum ipsa, neque aliquid qui, omnis a vitae animi sunt ipsum voluptatum temporibus fugiat unde molestias dicta reprehenderit, accusamus rerum expedita? Nam, nemo itaque. Quasi odit suscipit esse doloremque numquam culpa beatae, corrupti enim ipsa, quis pariatur iste voluptates voluptate.</p>
                </div>
            </div>
            <div className="product-blurb__text-block">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus sit, facilis dolorum ipsum excepturi voluptas praesentium commodi cupiditate minima repellendus sint soluta iure a harum ab vitae laudantium modi dolor nam quis totam tenetur. Architecto deserunt dolor quod earum quidem! Explicabo, officiis. Cupiditate, beatae. Repellendus quasi tenetur in odit corporis. Cum ipsum modi sed sapiente quaerat saepe soluta corporis consequatur. Earum ipsa, neque aliquid qui, omnis a vitae animi sunt ipsum voluptatum temporibus fugiat unde molestias dicta reprehenderit, accusamus rerum expedita? Nam, nemo itaque. Quasi odit suscipit esse doloremque numquam culpa beatae, corrupti enim ipsa, quis pariatur iste voluptates voluptate.</p>
            </div>
        </div>
        <div className="product-reviews">
            <div className="product-review__img">
                <img src={PlaceholderImg} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.</p>
            </div>
        </div>
    </div>
)

export default Product;