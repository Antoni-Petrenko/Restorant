import React from 'react';
import {Link} from 'react-router-dom';
const SliderItem = ({header,text,link,btnName='ZOBACZ WIĘCEJ'}) => {
  return (
    <div className='Slider-item'>
      <div className='Slider-item__content'>
        <h2 className="Slider-item__heading">{header}</h2>
        <p className="Slider-item__paragraph">{text}</p>
        <Link className="Slider-item__button" to={link}>{btnName}</Link>
        </div>
    </div>
  )
}

export  {SliderItem}
