import React from "react";
import Navbar from "../Allsimilar/Navbar";
import style from "../Css/Home.module.css";
import { FaAngleDown } from "react-icons/fa";
import Lswiper from "../Lswiper";
import Pswiper from "../Pswiper";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const Home = () => {
  const [showfly, setShowfly] = useState(false);

  function handleshow() {
    setShowfly(true);
  }

  function handlehide() {
    setShowfly(false);
  }


  return (
    <div className={style.go}>
      <Navbar />

      <div className={style.homediv1}>
        <div className={style.homediv2}>
          <div className={style.productdiv}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/29327f40e9c4d26b.png?q=100"
              alt=""
            />
            <p className={style.proname}>Grocery</p>
          </div>
          <div className={style.productdiv}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/22fddf3c7da4c4f4.png?q=100"
              alt=""
            />
            <p className={style.proname}>Mobiles</p>
          </div>
          <div className={style.productdiv2}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/fk-p-flap/70/70/image/0d75b34f7d8fbcb3.png?q=100"
              alt=""
            />
            <div className={style.inside1}>
              <p className={style.proname}>Fashion</p>
              <FaAngleDown className={style.downarrow} />
            </div>
          </div>

          <div className={style.productdiv2}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/69c6589653afdb9a.png?q=100"
              alt=""
            />
            <div className={style.inside1}>
              <p className={style.proname}>Electronics</p>
              <FaAngleDown className={style.downarrow} />
            </div>
          </div>
          <div className={style.productdiv2} onMouseOver={handleshow} onMouseLeave={handlehide} >
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/ab7e2b022a4587dd.jpg?q=100"
              alt=""
            />

            <div className={style.inside1}>
              <p className={style.proname}>Home & Furniture</p>
              <FaAngleDown className={style.downarrow} />
            </div>
          </div>
          <div className={style.productdiv}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/fk-p-flap/70/70/image/0139228b2f7eb413.jpg?q=100"
              alt=""
            />
            <p className={style.proname}>Appliances</p>
          </div>
          <div className={style.productdiv}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/71050627a56b4693.png?q=100"
              alt=""
            />
            <p className={style.proname}>Travel</p>
          </div>
          <div className={style.productdiv2}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/dff3f7adcf3a90c6.png?q=100"
              alt=""
            />

            <div className={style.inside1}>
              <p className={style.proname}>Beauty & Toys</p>
              <FaAngleDown className={style.downarrow} />
            </div>
          </div>
          <div className={style.productdiv2}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/fk-p-flap/70/70/image/05d708653beff580.png?q=100"
              alt=""
            />

            <div className={style.inside1}>
              <p className={style.proname}>Two Wheelers</p>
              <FaAngleDown className={style.downarrow} />
            </div>
          </div>
        </div>

        <Lswiper />

        <div className={style.smallpro3}>
          <p className={style.pa1}>Best Deals on Smartphones</p>
          <Pswiper />

          <div className={style.flyingdiv}>
            <img
              style={{ width: "100%", height: "300px" }}
              src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/9845b97107ced583.png?q=20"
              alt=""
            />
          </div>
        </div>
      </div>

      {showfly && <div className={style.profly1} onMouseOver={handleshow} onMouseLeave={handlehide}>
        <div className={style.smaproflymain}>
          <p>Home Furnishings</p>
          <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
        </div>
        <div className={style.smaproflychi}>
          <p>Furniture Studio</p>
        </div>
        <div className={style.smaproflychi}>
          <p>Living Room Furniture</p>
        </div>

        <div className={style.smaproflychi}>
          <p>Kitchen & Dining</p>
        </div>
        <div className={style.smaproflychi}>
          <p>Bedroom Furniture</p>
        </div>
        <div className={style.smaproflychi}>
          <p>Space Saving Furniture</p>
        </div>
        <div className={style.smaproflychi}>
          <p>Home Decor</p>
        </div>
        <div className={style.smaproflychi}>
          <p>Tools & Utility</p>
        </div>
        <div className={style.smaproflychi}>
          <p>Work Space Furniture</p>
        </div>
        <div className={style.smaproflychi}>
          <p>Kids Furniture</p>
        </div>
        <div className={style.smaproflychi}>
          <p>Lightings & Electricals</p>
        </div>
        <div className={style.smaproflychi}>
          <p>Cleaning & Bath</p>
        </div>
        <div className={style.smaproflychi}>
          <p>Pet & Gardening</p>
        </div>
      </div>}

      {showfly && <div className={style.profly2} onMouseOver={handleshow} onMouseLeave={handlehide}>
        <div className={style.smaproflymain2}>
          <p>More in Home Furnishings</p>
        </div>

        <div className={style.smaproflychi2}>
          <p>All</p>
        </div>
        <div className={style.smaproflychi2}>
          <p>Bed Linens</p>
        </div>
        <div className={style.smaproflychi2}>
          <p>Bedsheets</p>
        </div>
        <div className={style.smaproflychi2}>
          <p>Blankets</p>
        </div>
        <div className={style.smaproflychi2}>
          <p>Curtains & Accessories</p>
        </div>
        <div className={style.smaproflychi2}>
          <p>Bath Linen</p>
        </div>
        <div className={style.smaproflychi2}>
          <p>Floor coverings</p>
        </div>

        <div className={style.smaproflychi2}>
          <p>Covers & protectors</p>
        </div>
        <div className={style.smaproflychi2}>
          <p>Cushions & Pillows</p>
        </div>
        <div className={style.smaproflychi2}>
          <p>Kitchen Linen Sets</p>
        </div>
        <div className={style.smaproflychi2}>
          <p>Table Linen Sets</p>
        </div>
        <div className={style.smaproflychi2}>
          <p>Sofa & curtain fabrics</p>
        </div>

      </div>}



    </div>
  );
};

export default Home;
