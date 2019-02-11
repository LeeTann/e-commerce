import React from 'react'
import { Link } from 'react-router-dom'

export default function CartTotals({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-ms-5 ml-md-auto col-sm-8">
                    <Link to="/">
                        <button 
                            className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button"
                            onClick={() => clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-tile">subtotal:</span>{" "}<strong>$ {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-tile">tax:</span>{" "}<strong>$ {cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-tile">total:</span>{" "}<strong>$ {cartTotal}</strong>
                    </h5>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
