import React from 'react';
import { generateCustomPlaceholderURL } from 'react-placeholder-image';

import centToDollars from '../helper/centToDollars';

const Card = ({ item, addToCart }) => {
    const { id, name, salePrice, retailPrice, imageUrl, quantityAvailable } = item;
    const placeholderImageURL = imageUrl ? imageUrl : generateCustomPlaceholderURL(200, 164);

    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <div className="card h-100 visible-on-hover">
                <div className="position-relative p-3">
                    <img src={placeholderImageURL} className="card-img-top position-relative" alt={name} />
                    {quantityAvailable > 0 &&
                        <button type="button" className="btn btn-primary position-absolute full-width-button bottom-center" onClick={() => addToCart(id)}>Add to Cart</button>
                    }

                    {quantityAvailable === 0 &&
                        <span className="badge badge-secondary position-absolute bottom-right">SOLD OUT</span>
                    }
                </div>
                <div className="card-body d-flex flex-column align-items-center">
                    <center><p>{name}</p></center>
                    {retailPrice > 0 &&
                        <p><strike>{centToDollars(retailPrice)}</strike></p>
                    }
                    <p className="h3 mt-auto">{centToDollars(salePrice)}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
