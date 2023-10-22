import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="t-wrapper">
      <div className="t-title">
        <div className="t-title-heading">
          Testimonials
          <div className="t-title-description">
            What My Clients Say About Me<div className="border-image"></div>
          </div>
        </div>
      </div>
      <div className="testimonial-parent">
        <div className="testimonial">
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
            <Card
              img="https://blog.hubspot.com/hubfs/Customer-testimonial-page.jpg"
              text=" When she delivered my job,my head spinned, it was so nice and she
            implemented every functionality I requested for. Thankyou"
              name="PAULA WILSON"
              post="Media Analysist,washington,USA"
            />
            <Card 
            img="https://www.nicepng.com/png/detail/792-7926701_speakers-men-png-images-testimonial.png" 
            text="She is incredibly awesome. I hired her and when she delivered the project, I honestly fell in love with the project.she is indeed a great guy."
            name="ROBERT CARTER"
            post="Merkiting Manager, Worthington, USA"
            />
            
            <Card 
            img="https://rstheme.com/products/html/seo/seo-demo/images/testimonial/3.jpg" 
            text="It was nice hiring her for my project. she delivered even more than I can imagine. I recommend her for you."
            name="LESLIE ADKINS"
            post="Web Developer, Wonka Industries, FinLand"
            />
            <Card img="https://rstheme.com/products/html/seo/seo-demo/images/testimonial/6.jpg" 
            text="I patronized Deepika and when she delivered her project, I was impressed with her work. she is a very honest woman and she delivers ontime."
            name="BJOERN WEILAND"
            post="Founder DelDoktor.de, Berlin"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Card = ({ img,name,post,text }) => {
  return (
    <div className="testimonial-img">
      <Avatar
        className="avatar"
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
      />
      <p className="para">{text}</p>
      <p className="name">
        <span className="primary-text">{name}, </span>{post}
      </p>
    </div>
  );
};
export default Testimonial;