import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CtaImg from "../assets/ctaImg.png";

gsap.registerPlugin(ScrollTrigger);

const CtaSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block py-20 bg-[#FEFFF4] px-4"
    >
      <div
        className="relative mx-auto overflow-hidden shadow-2xl rounded-[30px] w-full group"
        style={{
          maxWidth: "1300px",
          aspectRatio: "13 / 8",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10 rounded-[30px]" />

        {/* Background Image with Hover Effect */}
        <img
          src={CtaImg}
          alt="Woman with natural skincare"
          className="w-full h-full object-cover rounded-[30px] transition-transform duration-500 ease-in-out group-hover:scale-105"
        />

        {/* Content */}
        <div
          ref={contentRef}
          className="absolute inset-x-0 bottom-20 z-20 flex justify-center opacity-0 px-4"
        >
          <div className="text-center max-w-xl w-full pt-6">
            <h2 className="text-2xl lg:text-5xl font-bold text-[#FEFFF4] font-inter leading-tight mb-6">
              Feel Beautiful Inside and Out
              <br />
              with Every Product.
            </h2>
            <button className="bg-[#FEFFF4] text-charcoal px-8 py-4 rounded-full font-inter font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-base">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
