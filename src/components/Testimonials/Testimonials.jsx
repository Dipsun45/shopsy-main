import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Virat Kohli",
    text: "Amazing experience! The product quality is top-notch and delivery was super fast. Highly recommended for electronics shopping.",
    img: "https://documents.bcci.tv/resizedimageskirti/164_compress.png",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    text: "Best eCommerce platform! Easy payment, genuine products, and great customer support. I loved the overall service.",
    img: "https://www.wisden.com/static-assets/images/players/3852.png?v=23.77",
  },
  {
    id: 3,
    name: "Sachine Tendulkar",
    text: "Excellent platform for buying electronics. Smooth ordering process and reliable delivery system. Truly impressive!",
    img: "https://hips.hearstapps.com/hmg-prod/images/indian-cricket-legend-sachin-teldulkar-poses-for-a-news-photo-1701204803.jpg?crop=0.670xw:1.00xh;0.152xw,0&resize=1200:*",
  },
  {
    id: 5,
    name: "MS Dhoni",
    text: "Very user-friendly website with amazing offers. I got the best deals and fast delivery. Will shop again!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFUx-9c2FS0Flj2pcoApdrBnNW17cXl51Fw&s",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
             <div
      id="review" ></div>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
