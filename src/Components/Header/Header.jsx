import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./Header.css";
import { AuthContext } from "../../Context/AuthContex";
import { ProductContext } from "../../Context/ProductContext";

const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const { categoriesList } = useContext(ProductContext);

  const numColumns = 3;
  const itemsPerColumn = Math.ceil(categoriesList.length / numColumns);
  const columns = Array.from({ length: numColumns }, (v, i) =>
    categoriesList.slice(
      i * itemsPerColumn,
      i * itemsPerColumn + itemsPerColumn,
    ),
  );

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg  navbar_main">
        <div className="container-fluid">
          <NavLink to="/">
            <img src="./images/logo2.png.webp" alt="Logo" />
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav_item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item nav_item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown nav_item">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div className="dropdown-menu multi-column sub_menu">
                  <div className="row">
                    {columns.map((column, colIndex) => (
                      <div key={colIndex} className="col-sm">
                        <ul className="list-unstyled">
                          {column.map((category, index) => (
                            <li className="nav_item" key={index}>
                              <NavLink
                                className="dropdown-item nav_item"
                                to={`/product/${category.slug}`}
                              >
                                {category.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="nav-item nav_item">
                <NavLink className="nav-link" to="/product">
                  Product
                </NavLink>
              </li>
              <li className="nav-item nav_item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav right_nav">
            <li className="nav-item nav_item">
              <NavLink className="nav-link" to="/cart">
                <FaCartShopping />
              </NavLink>
            </li>
            {currentUser ? (
              <>
                <li className="nav-item nav_item">
                  <NavLink className="nav-link" to="/account">
                    {currentUser.displayName}
                  </NavLink>
                </li>
                <li className="nav-item nav_item">
                  <button className="nav-link btn_login" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item nav_item">
                <NavLink className="nav-link btn_login" to="/login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
