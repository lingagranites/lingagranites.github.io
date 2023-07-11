import React, { useEffect, useState } from 'react';
import alaskawhite from '../homesrc/ALASKA WHITE_MINI.png'
import aurorablue from '../homesrc/AURORA BLUE_MINI.jpeg'
import biancoblack from '../homesrc/BIANCO BLACK - EG_MINI.jpeg'
import colonialcream from '../homesrc/COLONIAL CREAM_MINI.jpeg'
import redmulti from '../homesrc/RED MULTI COLOUR DARK_MINI.jpeg'
import vizagblue from '../homesrc/VIZAG BLUE BAHAMA_MINI.jpeg'

const Bounceinright = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imageClasses, setImageClasses] = useState({
    myImg1: '',
    myImg2: '',
    myImg3: '',
    myImg4: '',
    myImg5: '',
    myImg6: ''
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    if (scrollPosition > 550) {
      setImageClasses({
        myImg1: 'bounceinright3',
        myImg2: 'bounceinright4',
        myImg3: 'bounceinright1',
        myImg4: 'bounceinright1',
        myImg5: 'bounceinright3',
        myImg6: 'bounceinright4'
      });
    } else {
      setImageClasses({
        myImg1: '',
        myImg2: '',
        myImg3: '',
        myImg4: '',
        myImg5: '',
        myImg6: ''
      });
    }
  }, [scrollPosition]);

  return (
    <div>
      <div className="granite_content_div_image">
            <div className="granite_content_sub_div_image">
                <div className="granite_content_sub_div_image_sections">
                    <div className="granite_content_sub_div_image_sections_div">
                        <img src={alaskawhite} alt="ALASKA WHITE" id="myImg1" className={imageClasses.myImg1} />
                    </div>
                    <div className="granite_content_sub_div_image_sections_div">
                        <img src={aurorablue} alt="AURORA BLUE" id="myImg2" className={imageClasses.myImg2} />
                    </div>
                </div>

                <div className="granite_content_sub_div_image_sections">
                    <div className="granite_content_sub_div_image_sections_div">
                        <img src={biancoblack} alt="BIANCO BLACK" id="myImg3" className={imageClasses.myImg3} />
                    </div>
                    <div className="granite_content_sub_div_image_sections_div">
                        <img src={colonialcream} alt="COLONIAL CREAM" id="myImg4" className={imageClasses.myImg4} />
                    </div>
                </div>

                <div className="granite_content_sub_div_image_sections">
                    <div className="granite_content_sub_div_image_sections_div">
                        <img src={redmulti} alt="RED MULTI COLOUR" id="myImg5" className={imageClasses.myImg5} />
                    </div>
                    <div className="granite_content_sub_div_image_sections_div">
                        <img src={vizagblue} alt="VIZAG BLUE" id="myImg6" className={imageClasses.myImg6} />
                    </div>
                </div>
            </div>
        </div>        
    </div>
  );
};

export default Bounceinright;
