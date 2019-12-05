import React from 'react';
import Card from './modules/card';
import Cart from './modules/cart';

function App() {
    return (
        <div className="container-fluid main-content">
            <h1>Showing results for "[[query]]"</h1>
            <p>Page [[page]] of [[pages]]</p>
            <p>Showing [[count]] of [[total]]</p>
            
            <div className="row align-items-start flex-sm-row-reverse">
                <div className="col-12 col-md-4 col-lg-3 mb-3">
                    <Cart />
                </div>
                <div className="col-12 col-md-8 col-lg-9">
                    <div className="row">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
