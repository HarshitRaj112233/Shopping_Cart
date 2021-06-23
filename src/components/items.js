import React, { useContext } from "react";
import { CartContext } from "./cart";

export const Items = ({ id, description, title, img, price, quantity }) => {
  const { Remove_Item } = useContext(CartContext);
  const { Decrease_Quantity } = useContext(CartContext);
  const { Increase_Quantity } = useContext(CartContext);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="#" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity ">
          <i
            className="fas fa-minus "
            onClick={() => Decrease_Quantity(id)}
          ></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus" onClick={() => Increase_Quantity(id)}></i>
        </div>
        <div className="price">
          <h3>
            <i className="fas fa-rupee-sign"></i>
            {price}
          </h3>
        </div>
        <div className="remove-item">
          <i
            className="fas fa-trash-alt"
            onClick={() => {
              Remove_Item(id);
            }}
          ></i>
        </div>
      </div>
      )
      <hr className="break" />
    </>
  );
};
