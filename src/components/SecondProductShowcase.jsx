import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import prod1Img from "../assets/prod1.png";
import prod2Img from "../assets/prod2.png";
import fqImg from "../assets/fq-img.jpg";

gsap.registerPlugin(ScrollTrigger);

const SecondProductShowcase = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const productsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "ALYA SKIN CLEANSER.",
      price: "FROM $29.99",
      image: prod1Img,
    },
    {
      id: 2,
      name: "RITUAL OF SAKURA.",
      price: "FROM $27.99",
      image: prod2Img,
    },
    {
      id: 3,
      name: "THE BODY LOTION.",
      price: "FROM $19.99",
      image: fqImg,
    },
  ];

  useEffect(() => {
    // GSAP Scroll Animation
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      productsRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Handle Next and Previous for Mobile
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(newIndex);
    slideToIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(newIndex);
    slideToIndex(newIndex);
  };

  const slideToIndex = (index) => {
    const cardWidth = 340; // Card width + gap for mobile
    gsap.to(productsRef.current, {
      x: -index * cardWidth,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#FEFFF4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="mb-12 sm:mb-16 px-2 md:px-4 opacity-0">
          <h2 className="text-left md:text-center text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] font-bold text-[#2D3B36] font-inter mt-2 sm:mt-4 mb-6 sm:mb-8 leading-snug md:leading-[56px]">
            Feel Beautiful Inside and Out <br /> with Every Product.
          </h2>

          <div className="flex flex-wrap md:justify-center gap-2 sm:gap-4">
            {["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGING"].map(
              (item, idx) => (
                <span
                  key={idx}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border cursor-pointer
            transition-all duration-300 transform hover:scale-105
            ${
              item === "NEW ARRIVAL"
                ? "bg-[#2D3B36] text-[#FEFFF4]"
                : "bg-[#FEFFF4] text-[#2D3B36] border-[#d6d6d6] hover:bg-[#2D3B36] hover:text-white"
            }`}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={productsRef}
            className="flex gap-5 md:hidden transition-transform"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-[#FEFFF4] rounded-[20px] overflow-hidden border border-[#e7e8e0]
                  group transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.02]
                  w-[320px] h-[480px] flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#FEFFF4] rounded-[16px]
                  flex items-center justify-between px-5"
                  style={{ width: "280px", height: "60px" }}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-[#2D3B36]">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#7B8A84]">{product.price}</p>
                  </div>
                  <button
                    className="w-10 h-10 border  bg-[#2D3B36]/10 border-[#e7e8e0] rounded-[10px]
                      flex items-center justify-center
                      hover:bg-[#2D3B36] hover:text-[#FEFFF4]"
                  >
                    <svg
                      width="21"
                      height="12"
                      viewBox="0 0 21 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H3L5 9H17L19 3H6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="7" cy="11" r="1" fill="currentColor" />
                      <circle cx="17" cy="11" r="1" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop → Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-[#FEFFF4] rounded-[20px] overflow-hidden border border-[#e7e8e0]
                  group transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.02]
                  w-[360px] h-[500px] mx-auto"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#FEFFF4] rounded-[16px]
                  flex items-center justify-between px-5"
                  style={{ width: "320px", height: "60px" }}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-[#2D3B36]">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#7B8A84]">{product.price}</p>
                  </div>
                  <button
                    className="w-10 h-10 border  bg-[#2D3B36]/10 border-[#e7e8e0] rounded-[10px]
                      flex items-center justify-center
                      hover:bg-[#2D3B36] hover:text-[#FEFFF4]"
                  >
                    <svg
                      width="21"
                      height="12"
                      viewBox="0 0 21 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H3L5 9H17L19 3H6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="7" cy="11" r="1" fill="currentColor" />
                      <circle cx="17" cy="11" r="1" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------- Arrows for Mobile -------- */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="transition-transform hover:scale-105"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 79.5C61.8152 79.5 79.5 61.8152 79.5 40C79.5 18.1848 61.8152 0.5 40 0.5C18.1848 0.5 0.5 18.1848 0.5 40C0.5 61.8152 18.1848 79.5 40 79.5Z"
                stroke="#2D3B36"
              />
              <path
                d="M39.2929 39.2931C38.9024 39.6836 38.9024 40.3168 39.2929 40.7073L45.6569 47.0713C46.0474 47.4618 46.6805 47.4618 47.0711 47.0713C47.4616 46.6807 47.4616 46.0476 47.0711 45.6571L41.4142 40.0002L47.0711 34.3433C47.4616 33.9528 47.4616 33.3197 47.0711 32.9291C46.6805 32.5386 46.0474 32.5386 45.6569 32.9291L39.2929 39.2931ZM40 40.0002V41.0002H80V40.0002V39.0002H40V40.0002Z"
                fill="#2D3B36"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="transition-transform hover:scale-105"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                fill="#2D3B36"
              />
              <path
                d="M1 39.0002H0L1.74846e-07 41.0002H1V39.0002ZM41.7071 40.7073C42.0976 40.3168 42.0976 39.6836 41.7071 39.2931L35.3431 32.9291C34.9526 32.5386 34.3195 32.5386 33.9289 32.9291C33.5384 33.3197 33.5384 33.9528 33.9289 34.3433L39.5858 40.0002L33.9289 45.6571C33.5384 46.0476 33.5384 46.6807 33.9289 47.0713C34.3195 47.4618 34.9526 47.4618 35.3431 47.0713L41.7071 40.7073ZM1 40.0002V41.0002H41V40.0002V39.0002H1V40.0002Z"
                fill="#FEFFF4"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecondProductShowcase;
