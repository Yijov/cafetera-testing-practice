import React from 'react'
import CafeteraImage from "../assets/images/cafetera.jpg"
import VasosImage from "../assets/images/vasos.jpg"
import AzucareraImage from "../assets/images/azucarera.jpg"


const Status = () => {

  return (
    <div className='status-container'>
    <div className='image-contiainer'>
      <img  src={CafeteraImage} alt="cafetera" width={150} height={150} /> 
      <span>25</span>
      </div>
    <div className='image-contiainer'>
      <img src={VasosImage} alt="vasos" width={150} height={150}/>
      <span>25</span>
    </div>
    <div className='image-contiainer'>
      <img src={AzucareraImage} alt="azucarera" width={150} height={150} />
      <span>25</span>
    </div>
    </div>
  )
}

export default Status;