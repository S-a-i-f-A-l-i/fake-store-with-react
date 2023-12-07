import React from "react";
import styles from "../styles/Item.module.css";
import view_icon from "../assets/item-view.svg";
import cart_icon from "../assets/cart-icon.svg";
import { Link } from "react-router-dom";

const Item = () => {
  const obj = {
    img: "https://shophub-demo.netlify.app/images/shoe1.png",
    name: "Nike Air Max 270 to Chuck Taylors",
    price: 300,
  };
  return (
    <div className={styles.product_item}>
      <div
        className="d-flex justify-content-between align-items-center position-relative"
        style={{ height: "60px" }}
      >
        <div>
          <Link className="btn" style={{ height: "50px", width: "50px" }}>
            <img style={{ width: "100%" }} src={view_icon} alt="viewItem" />
          </Link>
        </div>
        <div>
          <Link className="btn" style={{ height: "50px", width: "50px" }}>
            <img src={cart_icon} alt="add-to-cart" />
          </Link>
        </div>
      </div>
      <div className={styles.item_picture}>
        <div>
          <div></div>
        </div>
        <div>
          <img
            src="https://shophub-demo.netlify.app/images/shoe1.png"
            alt="abcd"
          />
        </div>
      </div>
      <div className={`fs-3 fw-bold text-center lh-1`}>
        <p style={{ color: "var(--title-primary)" }}>{obj.name}</p>
      </div>
      <div className={`fs-4 fw-bold text-center lh-1`}>
        <p style={{ color: "var(--title-primary)" }}>{obj.price}</p>
      </div>
    </div>
  );
};

export default Item;
