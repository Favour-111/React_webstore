import React from "react";
import "./Popular.css";
import all_product from "../../All_Product/all_product";
import Item from "../../Item/Item";
function Popular() {
  const products = all_product.slice(1).slice(-5);
  return (
    <div>
      <p className="ms-4 Header">
        Popular Products in Wine and Spirit <hr className="w-75" />
      </p>

      <div className="product-page">
        {products.map((product) => {
          if (product.category === "women's clothing") {
            return (
              <Item
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
              />
            );
          } else {
            <></>;
          }
        })}
      </div>
    </div>
  );
}

export default Popular;
