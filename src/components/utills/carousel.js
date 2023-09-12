import React from "react";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.png";
import { handleBulletClick } from "../tools/handleBulletClick";

export default function Carousel() {
  return (
    <>
      <div className="carousel">
        <div className="images-wrapper">
          <img src={image1} className="image img-1 show" alt="" />
          <img src={image2} className="image img-2" alt="" />
          <img src={image3} className="image img-3" alt="" />
        </div>

        <div className="text-slider">
          <div className="text-wrap">
            <div className="text-group">
              <h2>Create your own courses</h2>
              <h2>Cudtomize as your like</h2>
              <h2>Invite students to your class</h2>
            </div>
          </div>

          <div className="bullets">
            <span
              className="active"
              data-value="1"
              onClick={(e) => handleBulletClick(e)}
            ></span>
            <span data-value="2" onClick={(e) => handleBulletClick(e)}></span>
            <span data-value="3" onClick={(e) => handleBulletClick(e)}></span>
          </div>
        </div>
      </div>
    </>
  );
}
