import React from 'react'
import Header from '../components/Header/Header';
import Herosection from '../components/Herosection/Herosection';
import Services from '../components/Services/Services';
import AboutUs from '../components/Aboutus/AboutUs';
import Technologies from '../components/Technologies/Technologies';
import Courses from '../components/Courses/Courses';
import Contactus from '../components/Contactus/Contactus';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className="mx-auto min-h-screen">
      <Header />
      <Herosection />
      <Services />
      <AboutUs />
      <Technologies />
      <Courses />
      <Contactus />
      <Footer />
    </div>
  );
}

export default Home