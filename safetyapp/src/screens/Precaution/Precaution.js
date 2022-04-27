import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Sidebar from '../../components/sidebar';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';


export default function Committee() {
  return (
    <> 
    <Sidebar />
    <main className="main-wrap">
    <Header />
    <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjTwo} />
      <Hero {...homeObjFive} />
      <Hero {...homeObjFour} />
      </main>
     </>
  )
}
