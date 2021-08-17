import React from "react";
import {useSelector, useDispatch} from "react-redux";
import styled from "styled-components";
import {deleteDish} from "../../actions/Cart";

const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  white-space: nowrap;
  z-index: 3;
`;

export const ShoppingCart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  let deliveryCost = 0;
  let totalCost = 0;

  cartItems.forEach((cartItem) => {
    totalCost += cartItem.cost;
  })

  let finalCost = totalCost - deliveryCost;


  const onClickClose = (selectCartItem) => {
    dispatch(deleteDish(selectCartItem));
  }

  return (
    <div id="">
      <div className="panel-cart-container">
        {/* <div className="panel-cart-title">
          <h5 className="title">Your Cart</h5>
          <button className="close" data-toggle="panel-cart">
            <i className="ti ti-close"></i>
          </button>
        </div> */}
        <div className="panel-cart-content cart-details">
          {cartItems?.length !== 0 ?
            <>
              <table className="cart-table">
                <tbody>
                  { cartItems.map((cart) => {
                      return (
                        <tr key={cart.id}>
                          <td className="title">
                            <span className="name">
                              <a href="#product-modal" data-toggle="modal">
                                {cart.product.name}
                              </a>
                            </span>
                            { cart.product?.menu_option_categories?.map((category) => {
                                return category?.selectOption && (
                                    <span className="caption text-muted" key={category?.selectOption.id}>{category?.selectOption.name}&nbsp;</span>
                                // <span className="caption text-muted">Large (500g)</span>
                                )})
                            }
                          </td>
                          <td className="price">${cart.cost.toFixed(2)}</td>
                          <td className="actions">
                            <a
                              href="#product-modal"
                              data-toggle="modal"
                              className="action-icon"
                            >
                              <i className="ti ti-pencil"></i>
                            </a>
                            &nbsp;
                            <a href="#" className="action-icon">
                              <i className="ti ti-close" onClick={() => onClickClose(cart)}></i>
                            </a>
                          </td>
                        </tr>
                      )
                    })
                  }

                </tbody>
              </table>
              
              <div className="cart-summary">
                <div className="row">
                  <div className="col-7 text-right text-muted">Order total:</div>
                  <div className="col-5">
                    <strong>
                      $<span className="cart-products-total">{totalCost.toFixed(2)}</span>
                    </strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-7 text-right text-muted">Devliery:</div>
                  <div className="col-5">
                    <strong>
                      $<span className="cart-delivery">{deliveryCost.toFixed(2)}</span>
                    </strong>
                  </div>
                </div>
                <hr className="hr-sm" />
                <div className="row text-lg">
                  <div className="col-7 text-right text-muted">Total:</div>
                  <div className="col-5">
                    <strong>
                      $<span className="cart-total">{finalCost.toFixed(2)}</span>
                    </strong>
                  </div>
                </div>
              </div>
            </>
          : 
            <div className="cart-empty">
              <i className="ti ti-shopping-cart"></i>
              <p>Your cart is empty...</p>
            </div>
          }
        </div>

      </div>
      <Button className="panel-cart-action btn btn-secondary btn-block btn-lg">
        <span>Go to checkout</span>
      </Button>
    </div>
  );
};
