import React from 'react';
import { generateCustomPlaceholderURL } from 'react-placeholder-image';

function Card() {
    const placeholderImageURL = generateCustomPlaceholderURL(200, 164);

    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <div className="card">
                <div className="position-relative">
                    <img src={placeholderImageURL} className="card-img-top position-relative" alt="{{image name}}" />
                    <button type="button" className="btn btn-primary position-absolute full-width-button bottom-center">Add to Cart</button>
                    <span className="badge badge-secondary position-absolute bottom-right">SOLD OUT</span>
                </div>
                <div className="card-body">
                    <center>
                        <p className="card-text">[[Product name]]</p>
                        <p><strike>$000.00</strike></p>
                        <p className="h3">$000.00</p>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default Card;
