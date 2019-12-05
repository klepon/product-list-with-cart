import React, { Fragment } from 'react';
import CartItem from './cartItem';

const Cart = props => {
    const getItems = () => {
        const { cart } = props;
        const items = [];
        for (var key of Object.keys(cart)) {
            if(cart[key] > 0) {
                items.push(<CartItem key={key} id={key} props={props} />);
            }
        }
        return items;
    }

    const items = getItems();

    return (
        <Fragment>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Shooping Cart</h5>
                    {items.length === 0 &&
                        <p className="card-text">You have no items in your cart</p>
                    }
                    {items}
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
