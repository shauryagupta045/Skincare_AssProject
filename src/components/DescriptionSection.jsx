import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DescriptionSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      {
        color: "#FEFFF4",

        opacity: 0.3,
      },
      {
        color: "#2D3B36",
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  const text =
    "Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.";

  const words = text.split(" ");

  return (
    <section ref={sectionRef} className="py-20 bg-[#FEFFF4]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div
          ref={textRef}
          className="text-2xl md:text-3xl lg:text-4xl font-inter leading-relaxed"
        >
          {words.map((word, index) => (
            <span key={index} className="word inline-block mr-2 mb-2">
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
