import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fqImg from "../assets/fq-img.jpg";

gsap.registerPlugin(ScrollTrigger);

const FaqSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const faqsRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Are your products safe for sensitive skin?",
      answer:
        "Yes, our products are formulated to be gentle yet effective. We avoid harsh chemicals and fragrances that can irritate sensitive skin, and all products are dermatologically tested.",
    },
    {
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    },
    {
      question: "What’s your return policy?",
      answer:
        "We offer a 30-day return policy for unused and unopened products. Contact our support team for more details.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping charges and times vary by location.",
    },
    {
      question: "How do I choose the right product?",
      answer:
        "Take our skin quiz or consult with a skincare expert via our chat to find the best match for your skin.",
    },
  ];

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
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
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        faqsRef.current.children,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.8"
      );
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#FEFFF4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="order-last lg:order-first flex items-start justify-center h-full lg:-translate-x-4">
            <div
              ref={imageRef}
              className="opacity-0 relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-[850px] h-full"
            >
              <img
                src={fqImg}
                alt="Premium skincare product"
                className="w-full h-full object-cover"
              />

              {/* Small Centered Help Box */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#FEFFF4] px-3 py-1 rounded-full flex items-center gap-2 shadow-md w-[250px] h-[70px]">
                <div className="w-[60px] h-[60px] rounded-full border border-dashed border-[#2D3B36] flex items-center justify-center">
                  <div className="w-[52px] h-[52px] bg-[#2D3B36] rounded-full flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2261_38)">
                        <path
                          d="M33.3334 19.9043C33.3334 12.6035 27.3739 6.66683 20 6.66683C12.6262 6.66683 6.66671 12.6035 6.66671 19.9043C6.66671 21.8875 6.91102 23.1642 7.21409 24.0977C7.41589 24.719 7.90201 24.1073 8.14117 23.883C9.77787 22.3473 12.3369 22.3838 13.929 23.9658C16.297 26.3185 18.481 29.5818 15.4635 32.5818C13.8435 34.1925 11.4038 34.8623 9.54727 33.1277C7.15064 30.8882 5.06814 28.2822 4.04369 25.127C3.61504 23.8068 3.33337 22.175 3.33337 19.9043C3.33337 10.7425 10.8054 3.3335 20 3.3335C29.1947 3.3335 36.6667 10.7425 36.6667 19.9043C36.6667 22.175 36.385 23.8068 35.9564 25.127C34.9319 28.2822 32.8494 30.8882 30.4529 33.1277C28.5962 34.8623 26.1565 34.1925 24.5365 32.5818C21.519 29.5818 23.703 26.3185 26.071 23.9658C27.6632 22.3838 30.2222 22.3473 31.8589 23.883C32.3209 24.3165 32.5477 24.8317 32.786 24.0977C33.089 23.1642 33.3334 21.8875 33.3334 19.9043Z"
                          fill="#FEFFF4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2261_38">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p className="text-[#2D3B36] font-inter text-xs font-medium leading-snug">
                  24/7 We're Here
                  <br />
                  to Help You
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <div ref={titleRef} className="opacity-0">
              <div className="inline-flex items-center px-4 py-2 bg-[#FEFFF4] rounded-full border border-[#2D3B36] mb-6">
                <div className="w-2 h-2 bg-[#2D3B36] rounded-full mr-3"></div>
                <span className="text-[#2D3B36] font-inter text-sm">
                  Frequently Asked Question
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-[44px] lg:text-[46px] font-bold text-[#2D3B36] font-inter leading-snug mt-4t">
                Answers to Your
                <br />
                Skincare Questions, All
                <br />
                in One Place.
              </h2>
            </div>

            <div ref={faqsRef} className="space-y-4 px-4 sm:px-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 bg-[#FEFFF4] border border-[#2D3B36] border-opacity-30 rounded-xl 
                    w-full px-4 md:px-6 py-2 md:py-4
                    ${
                      openFaq === index
                        ? "pb-2 md:pb-4"
                        : "overflow-hidden h-[38px] md:h-[70px] lg:h-[70px]"
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left flex items-center justify-between group hover:text-[#2D3B36] transition-colors duration-300"
                  >
                    <span className="text-[10px] sm:text-xs md:text-[15px] lg:text-[15px] font-semibold text-[#2D3B36] font-inter group-hover:text-[#2D3B36]">
                      {faq.question}
                    </span>
                    <div className="w-[14px] h-[14px] md:w-[30px] md:h-[30px]">
                      {openFaq === index ? (
                        <svg
                          className="w-full h-full text-[#2D3B36]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 12h12"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-full h-full text-[#2D3B36]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div id={`answer-${index}`}>
                      <p className="text-[#35433E] text-[10px] sm:text-xs md:text-sm font-inter leading-relaxed pt-2">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
