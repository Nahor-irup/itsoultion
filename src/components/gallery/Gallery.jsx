import React from "react";
import "./Gallery.css";
import firstImg from "../../assets/images/gallery_img/1.jpg";
import secImg from "../../assets/images/gallery_img/2.jpeg";
import thirdImg from "../../assets/images/gallery_img/3.jpg";
import forthImg from "../../assets/images/gallery_img/4.jpg";
import fifthImg from "../../assets/images/gallery_img/5.PNG";
import sixImg from "../../assets/images/gallery_img/6.PNG";
import seventhImg from "../../assets/images/gallery_img/7.jpeg";
import eigthImg from "../../assets/images/gallery_img/8.jpeg";

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <div className="gallery-header">
        <span>Gallery</span>
      </div>
      <div className="container"> 
        <div className="imgDiv">
          <img src={firstImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Mobile Repairing</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={secImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Computer Repairing</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={thirdImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Laptop Repairing</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={forthImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Laptop Repairing</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={fifthImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Image</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={sixImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">CCTV</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={seventhImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Computer Repairing</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={eigthImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Mobile Repairing</p>
          </div>
        </div>
      </div>
      <div className="viewMore">
      <a href="#">Viewmore...</a>
        </div>
    </div>
  );
};

export default Gallery;
