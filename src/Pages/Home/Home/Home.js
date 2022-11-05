import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner/Banner';
import CallToAction from '../CallToAction/CallToAction';
import Features from '../Features/Features';
import Products from '../Products/Products/Products';
import Services from '../Services/Services/Services';
import Team from '../Team/Team/Team';
import Testmonials from '../Testmonials/Testmonials/Testmonials';

const Home = () => {
  return (
    <div className='px-[15px] lg:px-0'>
      <Banner />
      <About />
      <Services />
      <CallToAction />
      <Products />
      <Team />
      <Features />
      <Testmonials />
    </div>
  );
};

export default Home;