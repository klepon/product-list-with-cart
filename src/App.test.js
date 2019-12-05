import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Card from './modules/card';
import CartItem from './modules/cartItem';
import centToDollars from './helper/centToDollars';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

test('convert cent to dollars', () => {
    expect(centToDollars('123')).toEqual('$1.23');
    expect(centToDollars('1234')).toEqual('$12.34');
    expect(centToDollars('00')).toEqual('$0.00');
});

test('render product card', () => {
    const item = {
        "id": "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
        "name": "Buy Olaplex No. 3 Hair Perfector",
        "salePrice": 3145,
        "retailPrice": 5000,
        "imageUrl": "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
        "quantityAvailable": 65
    }

    const { getByText } = render(<Card item={item} />);
    const name = getByText(/Buy Olaplex No. 3 Hair Perfector/i);
    const salePrice = getByText(/\$31.45/i);
    const retailPrice = getByText(/\$50.00/i);

    expect(name).toBeInTheDocument();
    expect(salePrice).toBeInTheDocument();
    expect(retailPrice).toBeInTheDocument();
})

test('render sold out product card', () => {
    const item = {
        "id": "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
        "name": "Buy Olaplex No. 3 Hair Perfector",
        "salePrice": 3145,
        "retailPrice": 5000,
        "imageUrl": "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
        "quantityAvailable": 0
    }

    const { getByText } = render(<Card item={item} />);
    const soldOut = getByText(/SOLD OUT/i);
    expect(soldOut).toBeInTheDocument();
})

test('render cart item', () => {
    const item = {
        "id": "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
        "name": "Buy Olaplex No. 3 Hair Perfector",
        "salePrice": 3145,
        "retailPrice": 5000,
        "imageUrl": "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
        "quantityAvailable": 65
    }
    const props = {
        results: [item],
        cart:{
            'ffc4211a-fb81-45e3-b1d8-2d399a92aa89' : 2
        }
    }

    const { getByText } = render(<CartItem id={item.id} props={props} />);
    const name = getByText(/Buy Olaplex No. 3 Hair Perfector/i);
    const qty = getByText(/2x/i);
    const total = getByText(/\$62.90/i);

    expect(name).toBeInTheDocument();
    expect(qty).toBeInTheDocument();
    expect(total).toBeInTheDocument();
})
