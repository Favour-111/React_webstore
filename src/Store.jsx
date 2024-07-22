import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import Shop from "./Component/Shop";
import Popular from "./Pages/popular/Popular";

function Store() {
  return (
    <div>
      <Nav />
      <Shop />
      <Popular />
      <Footer />
    </div>
  );
}

export default Store;
