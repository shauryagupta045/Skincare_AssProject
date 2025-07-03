import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureImg from "../assets/featureImg.png";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    timeline
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        featuresRef.current.children,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.8"
      );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#FEFFF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-14">
            <div className="mb-8" ref={titleRef}>
              <div className="px-0 py-0 inline-block">
                <span className="text-[#2D3B36] font-inter text-base border border-sage/20 bg-[#FEFFF4] rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2D3B36] rounded-full" /> Why Our
                  Products
                </span>
              </div>
              <h2 className="text-2xl md:text-[44px] lg:text-[46px] font-bold text-[#2D3B36] font-inter leading-snug mt-4 whitespace-nowrap">
                YOUR SKIN DESERVES <br />
                THE BEST CARE.
              </h2>
              <p className="text-[#2D3B36] font-inter text-base md:text-lg leading-relaxed mt-6 max-w-lg">
                Discover a curated collection of skincare products designed to
                rejuvenate, protect, and pamper your skin. Explore our range
                crafted with love backed by science, and inspired by nature.
              </p>
            </div>

            <div ref={featuresRef} className="space-y-14">
              {[
                {
                  title: "Bio Ingredients",
                  text: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
                },
                {
                  title: "Everything Natural",
                  text: "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
                },
                {
                  title: "All Handmade",
                  text: "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-6 opacity-0">
                  <span className="font-inter font-semibold text-[32px] leading-[44px] min-w-[65px] bg-gradient-to-b from-[#2D3B36] to-[#2D3B36]/20 text-transparent bg-clip-text">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-[30px] font-semibold text-[#2D3B36] font-inter leading-snug mb-3 whitespace-nowrap">
                      {feature.title}
                    </h3>
                    <p className="text-[#2D3B36] font-inter text-[15px] leading-snug max-w-md mt-3">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div ref={imageRef} className="opacity-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={FeatureImg}
                  alt="Woman applying skincare"
                  className="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                />

                {/* Help Box */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#FEFFF4] px-3 py-2 rounded-full flex items-center gap-3 shadow-md w-[250px] h-[70px]">
                  <div className="w-[60px] h-[60px] rounded-full border border-dashed border-[#2D3B36] flex items-center justify-center">
                    <div className="w-[52px] h-[52px] bg-[#2D3B36] rounded-full flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.87451 22.9583V33.3124C8.87451 37.1041 8.87451 37.1041 12.4578 39.5208L22.3121 45.2082C23.7912 46.0624 26.2079 46.0624 27.6871 45.2082L37.5412 39.5208C41.1246 37.1041 41.1246 37.1041 41.1246 33.3124V22.9583C41.1246 19.1667 41.1246 19.1667 37.5412 16.75L27.6871 11.0625C26.2079 10.2083 23.7912 10.2083 22.3121 11.0625L12.4578 16.75C8.87451 19.1667 8.87451 19.1667 8.87451 22.9583Z"
                          stroke="#FEFFF4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.4"
                          d="M36.4583 15.8957V10.4165C36.4583 6.24984 34.375 4.1665 30.2083 4.1665H19.7916C15.625 4.1665 13.5416 6.24984 13.5416 10.4165V15.7498"
                          stroke="#FEFFF4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.4"
                          d="M26.3121 22.896L27.4996 24.7502C27.6871 25.0418 28.1038 25.3335 28.4163 25.4168L30.5413 25.9585C31.8538 26.2918 32.208 27.4168 31.3538 28.4585L29.958 30.146C29.7496 30.4168 29.583 30.896 29.6038 31.2293L29.7288 33.4168C29.8121 34.771 28.8538 35.4585 27.6038 34.9585L25.5621 34.146C25.2496 34.021 24.7288 34.021 24.4163 34.146L22.3746 34.9585C21.1246 35.4585 20.1662 34.7502 20.2496 33.4168L20.3746 31.2293C20.3954 30.896 20.2287 30.396 20.0204 30.146L18.6246 28.4585C17.7704 27.4168 18.1246 26.2918 19.4371 25.9585L21.5621 25.4168C21.8955 25.3335 22.3121 25.021 22.4788 24.7502L23.6663 22.896C24.4163 21.771 25.583 21.771 26.3121 22.896Z"
                          stroke="#FEFFF4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#2D3B36] font-inter text-xs font-medium leading-snug">
                    Best Skin Care Product <br /> Award Wining
                  </p>
                </div>
              </div>

              {/* Since and Learn More */}
              <div className="flex justify-between mt-6 px-1 text-[#2D3B36]">
                <span className="text-sm font-inter">SINCE 2001</span>
                <span className="text-sm font-inter font-semibold">
                  LEARN MORE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
