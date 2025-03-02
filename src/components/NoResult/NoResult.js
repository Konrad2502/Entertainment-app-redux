import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './NoResult.scss';

export default function NoResult() {
  return (
    <div className="no__result">
    <DotLottieReact
      className='no__result-logo'
      src="https://lottie.host/0d36b948-97b2-411b-a346-eca3ff8559a9/BvifpNFQE3.lottie"
      loop
      autoplay
    />
    <p className='no__result-txt'>No results found, Try another search !</p>
    </div>
   
  )
}
