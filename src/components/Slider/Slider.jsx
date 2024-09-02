import { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const slides = [
    {
      image:
        "url(https://kartinki.pics/pics/uploads/posts/2022-08/1660365266_39-kartinkin-net-p-fon-komnati-v-kvartire-krasivo-40.jpg)",
      text: "Квартиры и пентхаусы",
      description: "бизнес-класса",
    },
    {
      image:
        "url(https://i.pinimg.com/originals/45/47/ba/4547ba2a1a7c7faea7778caad4b237f8.jpg)",
      text: "Современные интерьеры",
      description: "элегантность и стиль",
    },
    {
      image:
        "url(https://novostroy.kz/Media/images/complex/big/94753c1d179911db47a5380727703fc1.jpg)",
      text: "Уютные апартаменты",
      description: "комфорт и удобство",
    },
  ];

  const nextSlide = () => {
    setSlideIn(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setSlideIn(true);
    }, 500);
  };

  const prevSlide = () => {
    setSlideIn(false);
    setTimeout(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
      );
      setSlideIn(true);
    }, 500);
  };

  useEffect(() => {
    setSlideIn(true);
  }, [currentSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <div className="slider-container">
        <button onClick={prevSlide} className="slider-button prev">
          <svg
            width="13"
            height="24"
            viewBox="0 0 13 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2559 0.598145L1.15084 11.7032L12.2559 22.8082"
              stroke="url(#paint0_linear_2379_12)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2379_12"
                x1="6.70335"
                y1="0.598145"
                x2="6.70335"
                y2="22.8082"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DAB57B" />
                <stop offset="1" stopColor="#C29A5C" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <div
          className={`slider ${slideIn ? "slide-in" : "slide-out"}`}
          style={{ backgroundImage: currentSlideData.image }}
        >
          <div className="slider-text">
            <p>{currentSlideData.text}</p>
            <p>{currentSlideData.description}</p>
          </div>
          <div className="slider-description">
            <p>КОМФОРТНЫЕ ПЛАНИРОВКИ {currentSlide + 1}/3</p>
          </div>
        </div>
        <button onClick={nextSlide} className="slider-button next">
          <svg
            width="13"
            height="24"
            viewBox="0 0 13 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.15063 0.598145L12.2557 11.7032L1.15063 22.8082"
              stroke="url(#paint0_linear_2379_230)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2379_230"
                x1="6.70315"
                y1="0.598145"
                x2="6.70315"
                y2="22.8082"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DAB57B" />
                <stop offset="1" stopColor="#C29A5C" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Slider;
