import React from "react";
import "./Shop.css";
import img from "../Assets/images/cha.png";
import coke from "../Assets/images/Coke-Transparent.png";
import chamdor from "../Assets/images/CHAMDOR-WHITE_GRAPE.png";
import blender from "../Assets/images/blender.png";
import oil from "../Assets/images/oil.png";
import banner from "../Assets/images/banner.png";
import banner2 from "../Assets/images/banner2.png";
function Shop() {
  return (
    <div className="body">
      <div className="Image_container">
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div>
        <h3 className="ms-5">
          Featured Categories
          <hr className="w-75" />
        </h3>
        <div className="categories">
          <div>
            <img src={coke} alt="" width={70} />
            Soft Drinks
          </div>
          <div>
            <img src={chamdor} alt="" width={50} />
            Wine & Spirit
          </div>
          <div>
            <img src={blender} width={100} alt="" />
            Electronics
          </div>
          <div>
            <img src={oil} width={70} alt="" />
            Dry Goods
          </div>
        </div>
      </div>
      <div className="Banner_container">
        <div>
          <img src={banner} alt="" />
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Shop;
