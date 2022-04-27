import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {


  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src="/images/warn.png"
              style={{ height: "46" }}
              className="logo"
              alt="Safety App template"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">

          <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/"
                exact={true}
              >
                <i className="icon fas fa-home"></i>
                <span className="text">Home</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/products"
              >
                <i className="icon fas fa-image"></i>
                <span className="text">Reports</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/addproduct"
              >
                <i className="icon fas fa-cart-plus"></i>
                <span className="text">Add report</span>
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/accidents"
                exact={true}
              >
                <i className="icon fas fa-list"></i>
                <span className="text">Accidents</span>
              </NavLink>
            </li>

          </ul>
          <br />
          <br />
        </nav>

      </aside>
    </div>
  );
};

export default Sidebar;
