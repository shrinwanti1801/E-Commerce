import React from 'react';
import "../Style/productCard.css";

const ProductCard = ({product}) => {
  return (
    <div className='product-cart'>
        <div className='card'>
            <img
             src={product.thumbnail}
             alt="product"
            >
            </img>
            <div className='card-2'>
                <h3>{product.title}</h3>
                <h3>{product.price}</h3>
            </div>
        </div>
        {/* <div className='add-to-cart'>
          <h3>Add to Cart</h3>
        </div> */}
    </div>
  )
}

export default ProductCard