import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GirlImg from "../assets/girl.png";
import PlumImg from "../assets/plum-img.png";

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const productRef = useRef(null);
  const buttonRef = useRef(null);
  const backgroundTextRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 2.8 });

    timeline
      .fromTo(
        subtitleRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        productRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        backgroundTextRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 0.1, duration: 2, ease: "power3.out" },
        "-=1.5"
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#EFF5E1] overflow-hidden w-full max-w-full flex flex-col items-start justify-start px-4 md:items-center md:justify-center md:text-center pt-20 md:pt-[80px]"
    >
      {/* Background Text */}
      <div
        ref={backgroundTextRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6 pointer-events-none opacity-0 z-0"
      >
        <h1 className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-bold text-[#2D3B36] font-inter leading-none tracking-tighter select-none">
          SKINCARE
        </h1>
      </div>

      {/* Title - Moved up for mobile */}
      <h1
        ref={titleRef}
        className="text-7xl md:text-7xl font-bold text-[#2D3B36] font-inter leading-[0.9] tracking-tight mb-6 md:mb-8 opacity-0 mt-8 md:mt-0 text-left md:text-center w-full"
      >
        GLOW <br />
        NATUR- <br />
        ALLY
      </h1>

      {/* Subtitle - Positioned below title for mobile */}
      <div
        ref={subtitleRef}
        className="w-full max-w-md text-left opacity-0 z-10 mb-8 md:mb-0 md:absolute md:top-12 md:left-8 md:left-16"
      >
        <p className="text-[#2D3B36] font-inter text-base md:text-lg leading-relaxed">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>
      </div>

      {/* Floating product */}
      <div
        ref={productRef}
        className="absolute top-24 right-4 md:top-12 md:right-12 z-20 opacity-0 transition-transform duration-300 hover:scale-105 w-16 h-20 md:w-28 md:h-32"
      >
        <img
          src={PlumImg}
          alt="Premium skincare product"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Image Container */}
      <div
        ref={imageRef}
        className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden opacity-0 transition-transform duration-300 hover:scale-105 mt-4 md:mt-0"
      >
        <img
          src={GirlImg}
          alt="Woman with avocado face mask"
          className="w-full h-[450px] object-cover"
        />

        {/* Floating Badge */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-[#FEFFF4] px-3 py-2 rounded-full flex items-center gap-2 shadow-md w-[300px] md:w-[360px] h-[60px] md:h-[70px]">
          <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full border border-dashed border-[#2D3B36] flex items-center justify-center shrink-0">
            <div className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] bg-[#2D3B36] rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={PlumImg}
                alt="Product Icon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <p className="text-[#2D3B36] font-inter text-xs md:text-sm font-medium leading-snug">
            While giving you an invigorating <br /> cleansing experience.
          </p>
        </div>
      </div>

      {/* Shop Now Button */}
      <button
        ref={buttonRef}
        className="bg-[#2D3B36] text-[#FEFFF4] px-8 py-4 rounded-full font-inter font-medium hover:bg-[#35433E] transition-all duration-300 transform hover:scale-105 w-full md:w-auto md:absolute md:bottom-[290px] md:left-16 z-10 opacity-0 mt-8 md:mt-0 max-w-sm mx-auto"
      >
        Shop Now
      </button>
    </section>
  );
};

export default HeroSection;