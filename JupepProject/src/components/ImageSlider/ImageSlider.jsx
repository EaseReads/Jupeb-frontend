import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import banner from "../../assets/Home Landing Image/Jupeb banner 1.jpg";
// import science from "../../assets/Home Landing Image/jupeb hard cover-science & management science.jpg";
// import artPQ from "../../assets/Home Landing Image/jupeb hard cover ART  & SOCAIL SCIENCE.jpg";
// import management from "../../assets/Home Landing Image/jupeb hard cover management.jpg";
// import unilag from "../../assets/Home Landing Image/UNILAG standing.jpg";
// import oau from "../../assets/Home Landing Image/oau standing.jpg";
// import unilorin from "../../assets/Home Landing Image/unilorin standing.jpg";
import futa from "../../assets/Home Landing Image/new futa.jpg";
import unilag from "../../assets/Home Landing Image/unilag 1280 .jpg";
import ilorin from "../../assets/Home Landing Image/ilorin 1280.jpg";
import oau from "../../assets/Home Landing Image/oau 1280 .jpg";
import science from "../../assets/Home Landing Image/sciend 1280 w.jpg";
import art from "../../assets/Home Landing Image/ART 1280 w .jpg";
import management from "../../assets/Home Landing Image/management 1280 .jpg";

import Nfuta from "../../assets/Home Landing Image/large futa.jpg";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <main className={styles.container}>
      <Slider {...settings}>
        <div className="relative w-full h-full border-none font-euclid">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full   border-none ${styles.imageContainer}`}
            src={science}
            alt="banner"
          />
          {/* <div className="absolute w-full top-[80px] flex items-center justify-center ">
            <h1 className="text-[16px] leading-[20px] w-5/6 xl:text-[100px] xl:leading-[91px] md:text-[60px] md:leading-[70px]  text-white">
              Find, choose and book your preferable hostel with ease
            </h1>
          </div> */}
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={art}
            alt="scinece"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full   border-none ${styles.imageContainer}`}
            src={management}
            alt="artPQ"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={Nfuta}
            alt="management"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={futa}
            alt="unilag"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={ilorin}
            alt="oau"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={unilag}
            alt="unilorin"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={oau}
            alt="futa"
          />
        </div>
      </Slider>
    </main>
  );
};

export default ImageSlider;
