import React from "react";
import styles from "../styles/Banner.module.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_circles}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <NavLink
                  to="/shop"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Shop
                </NavLink>
              </li>
            </ol>
          </nav>
        </div>
        <div>Page</div>
        <div>Sort</div>
      </div>
    </div>
  );
};

export default Banner;
