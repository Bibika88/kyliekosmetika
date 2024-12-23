import pn9 from '../assets/images/Component9.png'
import pn16 from '../assets/images/photo.jpg'
import pn17 from '../assets/images/photo1.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import pn10 from '../assets/images/arrow-left-square.png'
import pn11 from '../assets/images/arrow-right-square.png'
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
export default function Carousell2(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    const next = () => {
        setCurrentSlide((prevSlide) => prevSlide + 1);
    };

    const prev = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1);
    };

    const changeAutoPlay = () => {
        setAutoPlay((prevAutoPlay) => !prevAutoPlay);
    };

    const updateCurrentSlide = (index) => {
        if (currentSlide !== index) {
            setCurrentSlide(index);
        }
    };

    
    
    return(<div style={{display:'flex', justifyContent:"center", gap:48, alignItems:"center"}}>
    <div className="strelka" onClick={prev} style={{cursor:"pointer"}}>
         <img className="left" src={pn10}/>
        </div>
        <Carousel autoPlay={true}   onChange={updateCurrentSlide} showArrows={false}                  selectedItem={currentSlide}
 infiniteLoop width={1300} interval={1500} showIndicators={false} showThumbs={false} showStatus={false}>
                <div>
                    <img src={pn9} className='photo' />
                </div>
                <div>
                    <img className='photo' src={pn16} />
                </div>
                <div>
                <img src={pn17} className='photo' />
                </div>
            </Carousel>
            <div className="strelka" onClick={next}>
         <img className="right" src={pn11}/>
         </div>
            </div>
    )
}