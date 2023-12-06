import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <div>Logo</div>
          <p>shophub</p>
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" activeClassName="active">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active">
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink to="/myaccount" activeClassName="active">
            My Account
          </NavLink>
        </li>
      </ul>
      <div>
        <NavLink to="/cart">cart</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
