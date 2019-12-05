import React, { Fragment } from 'react';
import CartItem from './cartItem';

function Cart() {
    return (
        <Fragment>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Shooping Cart</h5>
                    <p className="card-text">You have no items in your cart</p>
                    
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>

            <div className="pl-4">
                <p>
                    <button type="button" className="badge badge-secondary">+</button> Increament Quantity
                </p>
                <p>
                    <button type="button" className="badge badge-secondary">-</button> Decrement Quantity
                </p>
                <p>
                    <button type="button" className="badge badge-secondary">x</button> Remove Quantity
                </p>
            </div>
        </Fragment>
    );
}

export default Cart;
