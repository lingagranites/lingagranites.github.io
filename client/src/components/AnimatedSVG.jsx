import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSVG = () => {
    const [ref, inView] = useInView({
      triggerOnce: true, // Animation triggers only once
      threshold: 0.1, // 10% of the SVG visible triggers animation
    });
  
    // Add your animation logic here
  
    return (
      <div ref={ref}>
        <svg height="100" width="100" viewBox="0 20 70 75" id="star-svg">
            {/* LINGA HEAD */}
            <path  id="star-path"  stroke={"blue"} strokeWidth={1.5} fill={"none"} strokeLinecap={"round"} d="M 20 55 C 20 20 , 50 20 , 50 50"></path>

            {/* INSIDE HEAD */}
            <path id="star-path" stroke={"black"} strokeWidth={0.7} fill={"none"} strokeLinecap={"round"} d="M 25 40 Q 35 41 , 45 40"></path>
            <path id="star-path" stroke={"black"} strokeWidth={0.7} fill={"none"} strokeLinecap={"round"} d="M 25 42 Q 35 43 , 45 42"></path>
            <path id="star-path" stroke={"black"} strokeWidth={0.7} fill={"none"} strokeLinecap={"round"} d="M 25 44 Q 35 45 , 45 44"></path>

            {/* HEADS THELAK */}
            <path id="star-path" stroke={"red"} fill={"red"} strokeWidth={"0.3"} d="M 33 45 C 34 48 , 36 48, 37 45 L 36 38 Q 35 35, 34 38 z "></path>

            {/* BOTTOM CURVE OF THE LINGA */}
            <path id="star-path" stroke={"black"} strokeWidth={"1"} fill={"none"} strokeLinecap={"round"} d="M 15 60 C 30 50, 45 60 ,55 50 "></path>
            <path id="star-path" stroke={"black"} strokeWidth={"1"} fill={"none"} strokeLinecap={"round"} d="M 15 65 C 30 55, 45 65 ,55 55 "></path>
            <path id="star-path" stroke={"black"} strokeWidth={"1"} fill={"none"} strokeLinecap={"round"} d="M 15 70 C 30 60, 45 70 ,55 60 "></path>
        </svg>
      </div>
    );
  };
  
  export default AnimatedSVG;
  