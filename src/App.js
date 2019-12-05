import React from 'react';
import axios from 'axios';

import Card from './modules/card';
import Cart from './modules/cart';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorFetching: null,
            isLoading: true,
            metadata: {},
            results: [],
            cart: {}
        };
    }

    componentDidMount() {
        axios.get(`http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json`)
        .then(res => {
            const { metadata, results } = res.data;

            this.setState({
                ...this.state,
                metadata,
                results
            });
        })
        .catch(error => {
            this.setState({
                ...this.state,
                errorFetching: error
            });
        })
        .finally(() => {
            this.setState({
                ...this.state,
                isLoading: false,
            });
        });
        ;
    }

    addToCart = id => {
        const { cart, results } = this.state;
        const itemIndex = results.findIndex(i => i.id === id);
        let qty = cart[id] || 0;
        results[itemIndex].quantityAvailable -= 1;
        qty += 1;

        if(results[itemIndex].quantityAvailable < 0) return;

        this.setState({
            ...this.state,
            results,
            cart: {
                ...this.state.cart,
                [id]: qty
            }
        });
    }

    removeFromCart = id => {
        const { cart, results } = this.state;
        const itemIndex = results.findIndex(i => i.id === id);
        let qty = cart[id] || 0;
        results[itemIndex].quantityAvailable += 1;
        qty -= 1;

        if(qty < 0) return;

        this.setState({
            ...this.state,
            results,
            cart: {
                ...this.state.cart,
                [id]: qty
            }
        });
    }

    removeAllFromCart = id => {
        const { cart, results } = this.state;
        const itemIndex = results.findIndex(i => i.id === id);
        let qty = cart[id] || 0;

        if(qty <= 0) return;

        results[itemIndex].quantityAvailable += qty;

        this.setState({
            ...this.state,
            results,
            cart: {
                ...this.state.cart,
                [id]: 0
            }
        });
    }

    render() {
        if( this.state.isLoading ) {
            return (
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center my-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="ml-4">
                            Loading data...
                        </div>
                    </div>
                </div>
            );
        }

        if( this.state.errorFetching ) {
            return(
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center my-5">
                        <div class="alert alert-warning" role="alert">
                            Enable loading data, please visit us in few moment.
                        </div>
                    </div>
                </div>
            )
        }

        const { metadata, results, cart } = this.state;
        const { query, page, pages, total } = metadata;

        return (
            <div className="container-fluid main-content">
                <h1>Showing results for "{query}"</h1>
                <p>Page {page} of {pages}</p>
                <p>Showing {results.length} of {total}</p>
                
                <div className="row align-items-start flex-sm-row-reverse">
                    <div className="col-12 col-md-4 col-lg-3 mb-3">
                        <Cart
                            results={results}
                            cart={cart}
                            addToCart={this.addToCart}
                            removeFromCart={this.removeFromCart}
                            removeAllFromCart={this.removeAllFromCart}
                        />
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        <div className="row">
                            {results.map(item => {
                                return <Card key={item.id} item={item} addToCart={this.addToCart} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
