import React from "react";
import style from "../Css/Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [showfly, setShowfly] = useState(false);

  function handleshow() {
    setShowfly(true);
  }

  function handlehide() {
    setShowfly(false);
  }


  return (
    <div className={style.nav1}>
      <div className={style.navdiv1}>
        <img
          className={style.navimg1}
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt=""
        />
      </div>
      <CiSearch className={style.navsearch} />
      <div className={style.navdiv2}>
        <input
          type="text"
          className={style.navinput1}
          placeholder="Search for Products, Brands and More"
        />
      </div>

      <div className={style.navdiv3}>
        <div className={style.accdiv}>
          <RiAccountCircleLine style={{ fontSize: "28px" }} />
          <p className={style.login}>Login</p>
          <FaAngleDown />
        </div>
        <div className={style.cartdiv}>
          <IoCartOutline style={{ fontSize: "28px" }} />
          <p className={style.login}>Cart</p>
        </div>

        <div className={style.selldiv}>
          <img
            style={{ width: "27px" }}
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
            alt=""
          />
          <p className={style.login}>Become a Seller</p>
        </div>
        <div className={style.dotdiv} onMouseOver={handleshow} onMouseLeave={handlehide}>
          <img
            style={{ width: "28px" }}
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
            alt=""
          />
        </div>
      </div>

      {showfly && (
        <div className={style.flydiv2} onMouseOver={handleshow} onMouseLeave={handlehide}>
          <div className={style.not1}>
            <img
              style={{ width: "20px", marginLeft: "5px" }}
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg"
              alt=""
            />
            <p style={{ paddingRight: "5px", marginLeft: "12px" }}>
              Notification Preferences
            </p>
          </div>

          <div className={style.not1}>
            <img
              style={{ width: "20px", marginLeft: "5px" }}
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg"
              alt=""
            />
            <p style={{ paddingRight: "5px", marginLeft: "12px" }}>
              24x7 Customer Care
            </p>
          </div>
          <div className={style.not1}>
            <img
              style={{ width: "20px", marginLeft: "5px" }}
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg"
              alt=""
            />
            <p style={{ paddingRight: "5px", marginLeft: "12px" }}>Advertise</p>
          </div>
          <div className={style.not1}>
            <img
              style={{ width: "20px", marginLeft: "5px" }}
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg"
              alt=""
            />
            <p style={{ paddingRight: "5px", marginLeft: "12px" }}>
              Download App
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
