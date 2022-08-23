import * as React from "react" 
import PlaceholderImg from '../images/lights.jpg'

//page content
import JSONData from "../content/Content.json"

const Product = () => (
    <div className="container">
        <h1>{JSONData.productTitle}</h1>
        <div className="main-product-blurb">
            <div className="product-blurb__img">
                <img src={PlaceholderImg} alt="" />
            </div>
            <div className="product-blurb">
                <h3>{JSONData.subHeading}</h3>
                <div className="product-blurb__text-block">
                    <p>{JSONData.productDesc}</p>
                </div>
            </div>
            <div className="product-blurb__text-block">
                <p>{JSONData.productDesc}</p>
            </div>
        </div>
        <div className="product-reviews">
            {/* rev 1 */}
            <div className="product-review__img">
                <img src={PlaceholderImg} alt="" />
                <p>{JSONData.shortProductReview}</p>
            </div>
            {/* rev 2 */}
            <div className="product-review__img">
                <img src={PlaceholderImg} alt="" />
                <p>{JSONData.shortProductReview}</p>
            </div>
            {/* rev 3 */}
            <div className="product-review__img">
                <img src={PlaceholderImg} alt="" />
                <p>{JSONData.shortProductReview}</p>
            </div>
            {/* rev 4 */}
            <div className="product-review__img">
                <img src={PlaceholderImg} alt="" />
                <p>{JSONData.shortProductReview}</p>
            </div>
        </div>
    </div>
)

export default Product;
