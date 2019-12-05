import React from 'react';
import { generateCustomPlaceholderURL } from 'react-placeholder-image';

function CartItem() {
    const placeholderImageURL = generateCustomPlaceholderURL(200, 164);

    return (
        <div className="media cart-item mb-2 align-items-center">
            <img src={placeholderImageURL} className="mr-2" alt="{{image name}}" />
            <div className="media-body mr-2">
                <p className="mb-0 small">Media heading</p>
                <button type="button" className="badge badge-secondary">+</button>
                <button type="button" className="badge badge-secondary">-</button>
                <button type="button" className="badge badge-secondary">x</button>
            </div>
            <div className="small">$000.00</div>
        </div>
    );
}

export default CartItem;