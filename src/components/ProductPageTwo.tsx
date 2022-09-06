import * as React from "react"

export default function App() {
    const productRevs = [
      {id: 1, name: 'ProductReviewOne', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.', img: '../images/lights.jpg'},
      {id: 2, name: 'ProductReviewTwo', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.', img: '../images/lights.jpg'},
      {id: 3, name: 'ProductReviewThree', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.', img: '../images/lights.jpg'},
      {id: 4, name: 'ProductReviewFour', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eius.', img: '../images/lights.jpg'}
    ];

    const results = [];
  
    for (const productRev of productRevs) {
      results.push(

        <div className="container" key="index">
          <img src={productRev.img} alt="" />
          <h3>{productRev.name}</h3>
          <p>{productRev.review}</p>
        </div>
      );
    }
  
    return <div>{results}</div>;
  }