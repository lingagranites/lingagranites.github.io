import React from 'react';
import './App.css';
import Preloader from './preloader.js';
import LingaSvg from './components/LingaSvg';
import Bounceinright from './components/bounceinright.jsx';
import ContactForm from './components/form.jsx';
import quality from './homesrc/quality.png'
import variety from './homesrc/variety.png'
import size from './homesrc/size.png'
import door from './homesrc/door.png'
import floor from './homesrc/floor.png'
import stairs from './homesrc/stairs.png'
import wall from './homesrc/wall.png'
import coffeetable from './homesrc/coffee_table.png'
import kitchen from './homesrc/kitchen.png'
import tiningtable from './homesrc/tining_table.png'
import shelves from './homesrc/shelves.png';
import ProgressBar from './progressbar.js';
import cloud1 from './homesrc/cloud1.png'
import cloud2 from './homesrc/cloud2.png'
import moon from './homesrc/moon.png'
// import banner from './homesrc/banner.png'





function App() {
    const handleContextMenu = (event) => {
        event.preventDefault();
      };
    
  return (
    <div onContextMenu={handleContextMenu}>

   {/* progress bar  */}
    <div className="progress_container">
        <div className="progress_bar" id="myBar"></div>
    </div>
    <ProgressBar />

  {/* nav_intro_overall */}
      <div className='nav_intro_overall'>
          {/* Navigation bar */}
        <nav className='navbar'>
           <LingaSvg />
          <h1>Linga Granites</h1>             
        </nav>

        {/* Intro Container */}
        <div className='intro_container'>  
            <div className='anime_overall'>
                <img className='cloud1' src={cloud1} alt='cloud1'/>          
                <img className='cloud2' src={cloud2} alt='cloud2'/>  
                <img className='cloud3' src={cloud1} alt='cloud3'/>
                <img className='moon' src={moon} alt='moon'/>   
            </div>  
            <div className='para_overall_container'>
                {/* <img src={banner} alt='BANNER'/> */}
                {/* <p>
                    <b>Linga Granites</b> is one of the granite manufacturers from Salem, Tamilnadu.
                    We have 30+ years of Experience in the granite field.
                
                    
                    It is used in interiors, especially kitchen countertops, Bathroom counters, Interior flooring, stair steps and risers, Interior wall coverings, tables, and coffee tables. 
                    Granite truly Timeless and Durable building material that has been used for centuries in Ancient Temples and Architecture.
                </p> */}
                {/* The use of granite in the Interiors and Exterior of living areas is relatively high.  */}
                {/* The desire to use a clean or Hygienic building material and obtain a natural appearance.  */}
            </div>             
        </div>
      </div>

      {/* Granite content  */}
    <div className="granite_content_main_div">

        <div className="granite_content_sub_div_text">
            <h1>ORIGIN OF GRANITES</h1>
            <p>Granite is a type of igneous rock that is composed primarily of quartz , feldspar and mica .
               It is formed through the slow cooling and solidification of molten magma beneath the Earth surface . 
               The mineral composition of granite can very depending on the specific location where it is Mined .
               Their natural and original  textures give the rooms an uniqueness and elegance. 
               Its outstanding Hardness, Versatility, Durability and Resistance to abrasion make this the perfect material for outdoor and indoor use.</p>
            <button className="gallery_button" >
                <a href="./svggallery.html">Gallery</a>
            </button>
        </div>

        {/* <Graniteimgcontent/> */}
        <Bounceinright/>
    </div>        

     {/* we assure you  */}
    <div className="content_overall_div">
        <div className="content_overall_sub_first">
            <h1>We Assure You</h1>
        </div>
        <div className="content_overall_sub_second">
            <div className="content_quality">
                <div className="content_quality_div">
                    <img src={quality} alt='quality_img'/>
                </div>
                <h5>Quality</h5>
                <p>We choose first-quality rough blocks from the quarry without any specks, lines, patches, or cracks. We ensure that top quality is matched.</p>
            </div>
    
            <div className="content_variety">
                <div className="content_variety_div">
                    <img src={variety} alt='variety_img'/>
                </div>
                <h5>Variety</h5>
                <p>We bring you a range of <span className="multicolortext">colors</span>  from all over India and also import from other countries.</p>
            </div>
    
            <div className="content_size">
                <div className="content_size_div">
                    <img src={size} alt='size_img'/>
                </div>
                <h5>Size</h5>
                <p>1.Cutter Size - 1000mm x 3300mm.<br/>
                   2.Cut to Size - as per requirement.<br/>
                   3.Thickness available-from 10mm and above.
                </p>
            </div>
        </div>       
    </div>

     {/* products ands application */}
    <div className="product_overall_content_div">
        <div className="product_main_header_div" id="slabs">
            <h1 id="custom">Products</h1>
        </div>
        <div className="product_main_text_div">
            <div className="product_tiles_div">
                <h1>TILES</h1>
                <p>Tiles are used widely for flooring and wall laying in both indoors and outdoors.  It can be available in various sizes and thicknesses as requirement. </p>
            </div>
            <div className="product_slab_div">
                <h1 >SLABS</h1>
                <p>Slabs are used in wide range of applications due to their size. 
                    It can be available in various height, width, and thickness.
                
                </p>
            </div>
            <div className="product_custom_div">
                <h1>CUSTOM</h1>
                <p>We can provide you, with any kind of design and structure-oriented product from granite as per your requirement. Also in slabs and tiles, you can customize in width, height and thickness.
                </p>
            </div>
        </div>
        <div className="application_main_div">
            <h1>Application of Granite</h1>
            <div className="appliction_icon_div">
                <div className="app_icon_subdiv">
                    <img src={door} alt='door_img'/>
                    <span>Door sills</span>
                </div>
                <div className="app_icon_subdiv">
                    <img src={floor} alt='floor_img'/>
                    <span>Flooring</span>
                </div>
                <div className="app_icon_subdiv">
                    <img src={stairs}alt='stairs_img'/>
                    <span>Stairs</span>
                </div>
                <div className="app_icon_subdiv">
                    <img src={wall} alt='wall_img'/>
                    <span>Wall</span>
                </div>
                <div className="app_icon_subdiv">
                    <img src={coffeetable} alt='coffee_table_img'/>
                    <span>Coffee Table</span>
                </div>
                <div className="app_icon_subdiv">
                    <img src={kitchen} alt='kitchen_img'/>
                    <span>Kitchen-Top</span>
                </div>
                <div className="app_icon_subdiv">
                    <img src={tiningtable} alt='tining_table_img'/>
                    <span>Dining Table</span>
                </div>
                <div className="app_icon_subdiv">
                    <img src={shelves} alt='shelves_img'/>
                    <span>Shelves</span>
                </div>
                
            </div>
        </div>
    </div>

     {/* Map  */}
    <div className="map_main_div">
        <div className="map_text_div">
            <h1 className="map_text_div_head">L<br/>O<br/>C<br/>A<br/>T<br/>I<br/>O<br/>N</h1>
        </div>
        <div className="map_content_div">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29553.150697023455!2d77.95854401493101!3d11.765607982536686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babffb2aa882e4d%3A0xdb64923cc57f6f28!2sLinga%20granites!5e0!3m2!1sen!2sin!4v1684999551341!5m2!1sen!2sin" title='map'></iframe>
        </div>
    </div>

     {/* contact   */}
     < ContactForm/>

    {/* Footer */}
    <div className="footer">
            <div className="footer_first_div">
                <div className="footer_child1">
                    <h1>About company</h1>
                    <p>Linga Granites is one of the best Granite suppliers in Salem.
                        Being in the industry for 30+ years and with an extinguished range of Granite stones.</p>
                </div>
                <div className="footer_child2">
                    <h1>Contact</h1>
                    <p><b>Whatsapp:</b><a href="https://api.whatsapp.com/send?phone=916385837678"><span>  6385837678 </span></a></p>                   
                    <p><b>Mail:</b><span><a href="mailto:lingagranites@gmail.com">&ensp;lingagranites@gmail.com</a></span></p>
                    <p><b>Contact:</b><span><a  href="tel:6385837678">&ensp;6385837678 ,</a><a href="tel:9791841697"> 9791841697</a></span></p>  
                    <p><b>Address:</b><span>&ensp;Linga Granites, Nainagoundanoor, M.N.patty, Mecheri, Mettur, Salem - 636503, Tamil Nadu.</span></p>

                </div>
                <div className="footer_child3">
                    <h1>Open Timing</h1>
                    <p><b>Monday to Friday</b> : 8am-9pm</p>
                    <p><b>Saturday</b> &emsp; : 8am-9pm</p>
                    <p><b>Sunday</b> &emsp;&ensp; : 8am-9pm</p>
                </div>
            </div>             
        </div>
 
    <Preloader />
    </div>
  );
}

export default App;
