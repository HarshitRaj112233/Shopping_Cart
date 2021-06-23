import React, { useContext } from "react";
import { CartContext } from "./cart";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Items } from "./items";
const Contextcart = () => {
  const { item } = useContext(CartContext);
  const { Clear_ALL_Item } = useContext(CartContext);
  const { totalItem } = useContext(CartContext);
  const { totalAmount } = useContext(CartContext);

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            className="arrow-icon"
            src="./images/left-arrow.png"
            alt="back"
          />

          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/Shopping-cart.png" alt="card" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">You have {totalItem} items in your cart</p>

        {/* Now for the Shopping item _UI */}
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((element) => {
                return (
                  <Items
                    key={element.id}
                    // img={element.img}
                    // title={element.title}
                    // price={element.price}
                    // description={element.description}
                    {...element}
                  />
                );
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="cart-total">
          <h3>
            Cart Total :{" "}
            <span>
              <i className="fas fa-rupee-sign">{totalAmount}</i>
            </span>
          </h3>
          <button>CheckOut</button>
          <button
            className="Clear_cart"
            onClick={() => {
              Clear_ALL_Item();
            }}
          >
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default Contextcart;
