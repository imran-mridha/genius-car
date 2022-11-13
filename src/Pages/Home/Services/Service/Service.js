import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceBanner from './ServiceBanner';
import ServiceFacility from './ServiceFacility';
import step1 from '../../../../assets/images/service/step1.png';
import step2 from '../../../../assets/images/service/step2.png';
import step3 from '../../../../assets/images/service/step3.png';
import serviceVideo from '../../../../assets/images/service/service-video.png';
import services from '../../../../assets/images/service/services.png';
import download from '../../../../assets/images/service/download.png';
import carDoctor from '../../../../assets/images/service/car-doctor.png';


const Service = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div className='container mx-auto my-20'>
      <ServiceBanner service={service} />

      

      <div className='grid grid-cols-1 lg:grid-cols-6 my-20 gap-5'>
        <div className='col-span-4'>
          <img className='rounded-lg' src={service.img} alt="" />
          <div className='space-y-5'>
            <h2 className='mt-5 text-3xl font-bold'>{service.title}</h2>
            <p className='text-gray-500'>
              {service.description}
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
            {
              service?.facility.map((serviceFacility, idx) => <ServiceFacility
                key={idx}
                serviceFacility={serviceFacility}
              />)
            }
          </div>
          <div className='mt-10'>
            <p className='text-gray-500'>
              {service.description}
            </p>
          </div>
          <div>
            <h2 className='mt-5 text-3xl font-bold'>3 Simple Steps to Process</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='text-center mt-10 border p-5 rounded-lg'>
              <img className='w-2/4 mx-auto mb-3' src={step1} alt="" />
              <h4 className='text-xl font-semibold'>Step One</h4>
              <p className='text-gray-500 mt-3'>It uses a dictionary of over 200 .</p>
            </div>
            <div className='text-center mt-10 border p-5 rounded-lg'>
              <img className='w-2/4 mx-auto mb-3' src={step2} alt="" />
              <h4 className='text-xl font-semibold'>Step Two</h4>
              <p className='text-gray-500 mt-3'>It uses a dictionary of over 200 .</p>
            </div>
            <div className='text-center mt-10 border p-5 rounded-lg'>
              <img className='w-2/4 mx-auto mb-3' src={step3} alt="" />
              <h4 className='text-xl font-semibold'>Step Three</h4>
              <p className='text-gray-500 mt-3'>It uses a dictionary of over 200 .</p>
            </div>
          </div>
          <div className='mt-10'>
            <img src={serviceVideo} alt="" />
          </div>

        </div>
        <div className='col-span-2 space-y-5'>
            <div>
              <img src={services} alt="" />
            </div>
            <div>
              <img src={download} alt="" />
            </div>
            <div className='bg-black p-5 rounded-lg'>
              <img className='' src={carDoctor} alt="" />
            </div>
            <div>
              <h2 className='text-2xl font-bold'>Price: ${service.price}.00</h2>
              <Link to={`/checkout/${service._id}`}><button className='btn mt-5 w-full bg-theme-default hover:bg-theme-default border-none text-xl'>Procced Checkout</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Service;