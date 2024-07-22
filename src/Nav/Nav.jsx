import React, { useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { PiShoppingBagLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  const [nav, SetNav] = useState("Home");
  const drop = useRef();
  const drop_pages = useRef();

  const dropdown = (list) => {
    drop.current.classList.toggle("dropdown_visible");
  };
  const Dropdown_pages = (list) => {
    drop_pages.current.classList.toggle("dropdown_visible");
  };
  return (
    <>
      <div className="p-5 d-flex align-items-center justify-content-between">
        <div>
          <img
            src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg"
            alt=""
          />
        </div>
        <div className="d-flex align-items-center">
          <FiUser size={24} />
          <div className="favorite_icon_bx">
            <CiHeart size={24} className="mx-2" />
            <div className="favorite_icon_count">2</div>
          </div>
          <div className="shopping_Cart_bx">
            <PiShoppingBagLight size={24} />
            <div className="shopping_Cart_count">2</div>
          </div>
        </div>
      </div>
      <div>
        <nav>
          <ul className="Nav_List">
            <li>
              <Link
                className="Nav-Links mt-1"
                onClick={() => {
                  SetNav("Home");
                }}
              >
                Home
                {nav === "Home" ? <hr className="hover_display" /> : <></>}
              </Link>
            </li>
            <li>
              <Link className="Nav-Links">
                <div className="drop_down_container">
                  <div onClick={dropdown}>
                    shops <IoIosArrowDown />
                  </div>
                  <div className="DropDown" ref={drop}>
                    <ul>
                      <li>Soft Drinks</li>
                      <li>Wine & Spirit</li>
                      <li>Dry Goods</li>
                      <li>Electronics</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link className="Nav-Links">
                <div onClick={Dropdown_pages}>
                  pages <IoIosArrowDown />
                </div>
                <div className="DropDown" ref={drop_pages}>
                  <ul>
                    <li>Stores</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Account</li>
                    <li>About us</li>
                  </ul>
                </div>
              </Link>
            </li>
            <li>
              <Link className="Nav-Links">Account</Link>
            </li>
          </ul>
          <hr />
        </nav>
      </div>
    </>
  );
}

export default Nav;
