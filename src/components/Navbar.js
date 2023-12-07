import React from "react";
import cart_icon from "../assets/cart-icon.svg";
import { Link, NavLink } from "react-router-dom";
// <nav className={`navbar navbar-expand-lg`}>
//   <div className={`class="container-fluid`}>
//     <div className={`navbar-brand`}>
//       <Link to="/">
//         <div>Logo</div>
//         <p>shophub</p>
//       </Link>
//     </div>
//     <button
//       className={`navbar-toggler`}
//       type="button"
//       data-bs-toggle="offcanvas"
//       data-bs-target="#offcanvasDarkNavbar"
//       aria-controls="offcanvasDarkNavbar"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div
//       className={`offcanvas offcanvas-end`}
//       tabIndex="-1"
//       id="offcanvasNavbar"
//       aria-labelledby="offcanvasNavbarLabel"
//     >
//       <div className="offcanvas-body">
//         <ul className={`navbar-nav justify-content-end flex-grow-1 pe-3`}>
//           <li className={`nav-item`}>
//             <NavLink className={`nav-link`} to="/" activeclassname="active">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className={`nav-link`}
//               to="/shop"
//               activeclassname="active"
//             >
//               Shop
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className={`nav-link`}
//               to="/blog"
//               activeclassname="active"
//             >
//               Blog
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className={`nav-link`}
//               to="/contact"
//               activeclassname="active"
//             >
//               Contact
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className={`nav-link`}
//               to="/login"
//               activeclassname="active"
//             >
//               Login
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className={`nav-link`}
//               to="/signup"
//               activeclassname="active"
//             >
//               Signup
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className={`nav-link`}
//               to="/myaccount"
//               activeclassname="active"
//             >
//               My Account
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//     <div>
//       <NavLink className={`nav-link`} to="/cart">
//         cart
//       </NavLink>
//     </div>
//   </div>
// </nav>

const Navbar = () => {
  const logo_icon = {};
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid d-flex align-items-top">
          <Link
            className="navbar-brand d-flex align-items-center justify-content-center gap-2"
            to="/"
            style={{ color: "var(--nav-primary)" }}
          >
            <div
              style={{
                background: "var(--icon-bg-primary)",
                color: "var(--text-primary)",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "0 px",
                width: "46px",
                padding: "12px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ display: "block", fontSize: "8px" }}>■ ■</div>
              <div
                style={{
                  display: "block",
                  marginTop: "-4px",
                  fontSize: "8px",
                }}
              >
                ■ ■
              </div>
            </div>
            shophub
          </Link>
          <button
            class="navbar-toggler d-lg-none order-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end d-lg-none"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul
                className={`navbar-nav d-flex justify-content-end flex-grow-1 pe-3`}
              >
                <li className={`nav-item`}>
                  <NavLink
                    className={`nav-link`}
                    to="/"
                    activeclassname="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`nav-link`}
                    to="/shop"
                    activeclassname="active"
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`nav-link`}
                    to="/blog"
                    activeclassname="active"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`nav-link`}
                    to="/contact"
                    activeclassname="active"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`nav-link`}
                    to="/login"
                    activeclassname="active"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`nav-link`}
                    to="/signup"
                    activeclassname="active"
                  >
                    Signup
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`nav-link`}
                    to="/myaccount"
                    activeclassname="active"
                  >
                    My Account
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="d-none flex-grow-1 d-lg-flex align-items-center align-items-center justify-content-center">
            <ul
              className={`navbar justify-content-center flex-grow-1 gap-3 m-0`}
              style={{ listStyle: "none" }}
            >
              <li className={`nav-item`}>
                <NavLink className={`nav-link`} to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link`}
                  to="/shop"
                  activeclassname="active"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link`}
                  to="/blog"
                  activeclassname="active"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link`}
                  to="/contact"
                  activeclassname="active"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link`}
                  to="/login"
                  activeclassname="active"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link`}
                  to="/signup"
                  activeclassname="active"
                >
                  Signup
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link`}
                  to="/myaccount"
                  activeclassname="active"
                >
                  My Account
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            className="navbar-brand d-flex align-items-center justify-content-center gap-2"
            to="/cart"
            style={{ color: "black" }}
          >
            <img
              style={{ height: "20px", width: "20px" }}
              src={cart_icon}
              alt="cart-icon"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
