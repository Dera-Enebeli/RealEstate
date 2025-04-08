import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"; // Make sure to import the CSS file

// Custom next arrow component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow slick-next custom-arrow" onClick={onClick}>
      Next
    </button>
  );
};

// Custom previous arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow slick-prev custom-arrow" onClick={onClick}>
      Prev
    </button>
  );
};

export default function Cards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      <section className="flex flex-col gap-8 justify-center m-10 mb-[10rem]">
        <Slider {...settings}>
          <div className="p-2">
            <div className="flex flex-col justify-center items-center p-8 shadow-lg rounded-lg">
              <img src="/icon1.png" alt="Icon 1" className="h-24 w-24 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-center">
                Short-term Rentals
              </h2>
              <p className="text-center">
                Our short-term rental services offer flexible and convenient
                accommodation solutions for individuals. Our fully furnished
                properties provide the comfort and amenities of home, ensuring a
                pleasant and hassle-free stay. Ideal for vacationers, business
                travelers, or anyone in need of temporary housing, our
                short-term rentals cater to diverse needs with premium locations
                and exceptional service.
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="flex flex-col justify-center items-center p-8 shadow-lg rounded-lg bg-lightblue">
              <img src="/icon2.png" alt="Icon 2" className="h-24 w-24 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-center">
                Long-term Stays / Yearly Rentals
              </h2>
              <p className="text-center">
                Experience unparalleled craftsmanship and innovation with our
                premier real estate developments, setting new standards across
                Africa.
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="flex flex-col justify-center items-center p-8 shadow-lg rounded-lg">
              <img src="/icon3.png" alt="Icon 3" className="h-24 w-24 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-center">
                Property Sales
              </h2>
              <p className="text-center">
                Discover our flexible payment options tailored to your needs,
                making home ownership more accessible and convenient for you.
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="flex flex-col justify-center items-center p-8 shadow-lg rounded-lg bg-lightblue">
              <img src="/icon3.png" alt="Icon 3" className="h-24 w-24 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-center">
                Construction Services
              </h2>
              <p className="text-center">
                Discover our flexible payment options tailored to your needs,
                making home ownership more accessible and convenient for you.
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="flex flex-col justify-center items-center p-8 shadow-lg rounded-lg">
              <img src="/icon3.png" alt="Icon 3" className="h-24 w-24 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-center">
                Property Management
              </h2>
              <p className="text-center">
                Discover our flexible payment options tailored to your needs,
                making home ownership more accessible and convenient for you.
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="flex flex-col justify-center items-center p-8 shadow-lg rounded-lg bg-lightblue">
              <img src="/icon3.png" alt="Icon 3" className="h-24 w-24 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-center">
                Property Purchase
              </h2>
              <p className="text-center">
                Discover our flexible payment options tailored to your needs,
                making home ownership more accessible and convenient for you.
              </p>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  );
}
