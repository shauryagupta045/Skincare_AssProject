import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const backgroundTextRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    timeline
      .fromTo(
        footerRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      )
      .fromTo(
        backgroundTextRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 0.1,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      );
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-[#35433E] text-white py-20 opacity-0 overflow-hidden">
      {/* Background Text */}
      <div
        ref={backgroundTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]"
      >
        <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-white opacity-10 font-inter leading-none tracking-tighter select-none whitespace-nowrap">
          SKINCARE
        </h1>
      </div>

      <div className="relative z-[2] max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-inter leading-tight">
              Join The Skincare
              <br />
              Community Now.
            </h2>
            <p className="text-gray-300 font-inter text-lg leading-relaxed max-w-md">
              Get exclusive access to new products, skincare tips, and special
              offers. Your journey to beautiful skin starts here.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Youtube
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold font-inter mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-300 font-inter">contact.skincare.com</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-inter mb-3">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 font-inter"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 font-inter"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 font-inter"
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold font-inter mb-3">Support</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 font-inter"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 font-inter"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-300 font-inter"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 font-inter text-sm">
            © 2024 Skincare. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-inter text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-inter text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-inter text-sm"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
