import React, { useContext } from 'react'
import { CourseContext } from '../../context/CourseContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from "./AllServices.module.css"
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

function AllServices() {
    const { serviceDetails } = useContext(CourseContext);
  return (
    <div className="w-full h-screen px-6 sm:px-0">
      <Header />
      <div className="min-h-[50vh] sm:my-14 my-5">
        <h2
          className={`text-[36px] sm:text-[100px] uppercase font-bold ${styles.subHeading} orbitron-family text-center mb-5`}
        >
          All Services
        </h2>
        <div className="w-full flex-wrap flex justify-center sm:gap-8 gap-5">
          {serviceDetails.map((data, index) => (
            <Link
              to={`/services/${data.id}`}
              key={index}
              className="w-full sm:w-fit"
            >
              <ServiceCard data={data} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllServices