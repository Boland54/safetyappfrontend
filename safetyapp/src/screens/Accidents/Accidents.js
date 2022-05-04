import React from 'react';
import '../../components/accidents.css';
import Results from '../../components/Results';
import { homeObjOne, homeObjTwo } from './Data';
import Hero from '../../components/Hero';




export default function Accidents() {
  return (
    <> 


    <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Results />
    </>
  )
}
