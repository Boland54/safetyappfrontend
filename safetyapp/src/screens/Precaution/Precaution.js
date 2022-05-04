import React from 'react';
import Hero from '../../components/Hero';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';


export default function Committee() {
  return (
    <> 

    <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjTwo} />
      <Hero {...homeObjFive} />
      <Hero {...homeObjFour} />
     </>
  )
}
