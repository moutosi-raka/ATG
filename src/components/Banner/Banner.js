import React from 'react';
import banner from '../../assets/Rectangle 2.png'
import './Banner.css'

const Banner = () => {
    return (
        <div 
        className='banner'
        >
            {/* <img className='banner-img' src={banner} alt='' /> */}
           <div className='color-overlay d-flex justify-content-stat d-flex align-items-end'>
           <div className='banner-header ms-5 mb-5'>
           <h3>Computer Engineering</h3>
           <p>142,765 Computer Engineering follow this</p> 
           </div>
           </div>
        </div>
    );
};

export default Banner;