import React from "react";
import "./index.css";

const Menu: React.FC = () => {
  return (
    <>
      <div className="container1" id="menu">
        <div className="Menu">
          <div className="contant1">
            <h1>Our Menu</h1>
            <br />
            <h4>Bread Basket</h4>
            <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
            <h4>Honey Almond Granola with Fruits</h4>
            <p>
              Natural cereal of honey toasted oats, raisins, almonds and dates
              7.00
            </p>
            <h4>Belgian Waffle</h4>
            <p>Vanilla flavored batter with malted flour 7.50</p>
            <h4>Scrambled eggs</h4>
            <p>
              Scrambled eggs, roasted red pepper and garlic, with green onions
              7.50
            </p>
            <h4>Blueberry Pancakes</h4>
            <p>With syrup, butter and lots of berries 8.50 </p>
          </div>
          <div className="image1">
            <img src="/image/menu.jpg" />
          </div>
        </div>
        <hr />
        <br />
      </div>
    </>
  );
};
export default Menu;
