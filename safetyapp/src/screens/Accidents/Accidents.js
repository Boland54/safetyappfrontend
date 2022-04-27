import React from 'react';
import Header from '../../components/Header';
import '../../components/accidents.css';
import Results from '../../components/Results';
import { homeObjOne, homeObjTwo } from './Data';
import Hero from '../../components/Hero';
import Sidebar from '../../components/sidebar';




export default function Accidents() {
  return (
    <> 
    <Sidebar />
    <main className="main-wrap">
    <Header />

    <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
      <Results />
      </main>
    </>
  )
}
