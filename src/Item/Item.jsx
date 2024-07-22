import React from "react";
import "./Item.css";
import { TfiShoppingCart } from "react-icons/tfi";
import { LiaEyeSolid } from "react-icons/lia";
import all_Products from "../All_Product/all_product";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
function Item(props) {
  return (
    <div>
      <div className="product-page">
        <div key={props.id} className="product-card">
          <div className="w-100 d-flex align-items-center justify-content-center mt-5">
            <img
              src={props.image}
              alt={props.title}
              className="product-image"
            />
          </div>
          <div className="product-info ">
            <p className="category">{props.category}</p>
            <p className="product_title">{props.title}</p>
            <div className="d-block align-item-center justify-content-between">
              <div className="d-flex gap-2">
                <p className="Old_price">${props.price}</p>
                <p className="new_price">${props.price}</p>
              </div>
              <div className="d-flex align-item-end justify-content-end">
                <Link className="Cart_Btn ">
                  <FiPlus />
                  Add
                </Link>
              </div>
            </div>
            <div className="product-buttons">
              <button className="buy-btn">
                <TfiShoppingCart />
              </button>
              <button className="view-btn">
                <LiaEyeSolid />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
