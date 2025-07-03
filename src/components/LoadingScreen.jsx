import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500);
      },
    });

    timeline
      .to(progressBarRef.current, {
        width: "100%",
        duration: 2,
        ease: "power2.inOut",
      })
      .to(progressBarRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power3.inOut",
      });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 bg-cream flex items-center justify-center"
    >
      <div className="w-80 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full w-0 bg-charcoal rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
