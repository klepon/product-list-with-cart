import React from 'react';

import centToDollars from '../helper/centToDollars';

const CartItem = ({ id, props }) => {
    const { results, cart, addToCart, removeFromCart, removeAllFromCart } = props;
    const item = results.filter(i => i.id === id)[0];

    return (
        <div className="media cart-item mb-3 align-items-center">
            <p className="badge badge-light mb-0 p-2 mr-2">{cart[id]}x</p>
            <div className="media-body mr-2">
                <p className="mb-0 small">{item.name}</p>
                <button onClick={() => addToCart(id)} type="button" className="mr-1 badge badge-secondary">+</button>
                <button onClick={() => removeFromCart(id)} type="button" className="mr-1 badge badge-secondary">-</button>
                <button onClick={() => removeAllFromCart(id)} type="button" className="badge badge-secondary">x</button>
            </div>
            <div className="small">{centToDollars(cart[id] * item.salePrice)}</div>
        </div>
    );
}

export default CartItem;