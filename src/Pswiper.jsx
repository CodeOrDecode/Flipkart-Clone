import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./Css/Pswiper.css";

const Pswiper = () => {
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="productdiv">
          <img
            style={{ width: "150px" }}
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=70"
            alt=""
          />
          <p className="firstp">moto edge 40 neo</p>
          <p className="secondp">incl of offers</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="productdiv">
          <img
            style={{ width: "170px" }}
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70"
            alt=""
          />
           <p className="firstp">vivo t2 pro 5g</p>
           <p className="secondp">incl of offers</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="productdiv">
          <img
            style={{ width: "130px" }}
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=70"
            alt=""
          />
             <p className="firstp">poco m6 pro</p>
             <p className="secondp">incl of offers</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="productdiv">
          <img
            style={{ width: "90px" }}
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=70"
            alt=""
          />
             <p className="firstp">readme 12 5G</p>
             <p className="secondp">incl of offers</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="productdiv">
          <img
            style={{ width: "120px" }}
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/n/z/4/-original-imagz5g9gyhmgusp.jpeg?q=70"
            alt=""
          />
             <p className="firstp">POCO X6 Neo 5G</p>
             <p className="secondp">incl of offers</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="productdiv">
          <img
            style={{ width: "140px" }}
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/d/3/g/-original-imagy2v5ggthbvfe.jpeg?q=70"
            alt=""
          />
             <p className="firstp">poco m6 5g</p>
             <p className="secondp">incl of offers</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="productdiv">
          <img
            style={{ width: "96px" }}
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/w/i/d/-original-imagwzrguaee4pz6.jpeg?q=70"
            alt=""
          />
             <p className="firstp">poco x6 pro</p>
             <p className="secondp">incl of offers</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="productdiv">
          <img
            style={{ width: "160px" }}
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/9/x/f/-original-imagxtnehfg5pcwt.jpeg?q=70"
            alt=""
          />
             <p className="firstp">iPhone 15</p>
             <p className="secondp">incl of offers</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Pswiper;
