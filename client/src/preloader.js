import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader-svg">
          <svg height={100} width={100} viewBox={"0 20 70 75"}>
          {/* LINGA HEAD */}
    <path stroke={"blue"} strokeWidth={1.5} fill={"none"} strokeLinecap={"round"} d="M 20 55 C 20 20 , 50 20 , 50 50"></path>

{/* INSIDE HEAD */}
<path stroke={"white"} strokeWidth={0.7} fill={"none"} strokeLinecap={"round"} d="M 25 40 Q 35 41 , 45 40"></path>
<path stroke={"white"} strokeWidth={0.7} fill={"none"} strokeLinecap={"round"} d="M 25 42 Q 35 43 , 45 42"></path>
<path stroke={"white"} strokeWidth={0.7} fill={"none"} strokeLinecap={"round"} d="M 25 44 Q 35 45 , 45 44"></path>

{/* HEADS THELAK */}
<path stroke={"red"} fill={"red"} strokeWidth={"0.3"} d="M 33 45 C 34 48 , 36 48, 37 45 L 36 38 Q 35 35, 34 38 z "></path>

{/* BOTTOM CURVE OF THE LINGA */}
<path stroke={"white"} strokeWidth={"1"} fill={"none"} strokeLinecap={"round"} d="M 15 60 C 30 50, 45 60 ,55 50 "></path>
<path stroke={"white"} strokeWidth={"1"} fill={"none"} strokeLinecap={"round"} d="M 15 65 C 30 55, 45 65 ,55 55 "></path>
<path stroke={"white"} strokeWidth={"1"} fill={"none"} strokeLinecap={"round"} d="M 15 70 C 30 60, 45 70 ,55 60 "></path>
          </svg>
        </div>
      )}

      <style>
        {`
          @keyframes scaleAnimation {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
        
          .preloader-svg {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: black; 
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999; 
          }
        
          .preloader-svg svg {
            height: 100px;
            width: 100px;
            animation: scaleAnimation 2s ease-in-out infinite;
          }

        `}
      </style>
    </>
  );
};

export default Preloader;

