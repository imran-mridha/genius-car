import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const [search, setSearch] = useState('');

  const searchRef = useRef()

  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
      .then(res => res.json())
      .then(data => setServices(data))
  }, [isAsc,search])

  const handleAscSesc =event=>{
    event.preventDefault();
    const selectedValue = event.target.superHero.value;
    console.log(selectedValue);
    if(selectedValue === 'asc'){
      setIsAsc(true);
    }else{
      setIsAsc(false);
    }
  }

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(searchRef.current.value);
  }
  return (
    <div className="services-content container mx-auto my-20">
      <div className="section-title text-center">
        <p className="text-xl font-bold text-theme-default">Service</p>
        <h2 className='text-theme-dark text-5xl font-bold my-5'>Our Service Area</h2>
        <p className='w-6/12 mx-auto text-theme-text'>
          the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className='mt-10 flex justify-between'>
        <div className="form-control">
          <form onSubmit={handleSearch} className="input-group">
            <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
            <button type='submit' className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </form>
        </div>
        <div className="form-control">
          <form onSubmit={handleAscSesc} className="input-group">
            <select name='superHero' className="select select-bordered">
              <option value='asc'>Asc</option>
              <option value='desc'>Desc</option>
            </select>
            <button type='submit' className="btn">Sort</button>
          </form>
        </div>
      </div>
      <div className='service-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {
          services.map(service => <ServiceCard key={service._id} service={service} />)
        }
      </div>
      <div className='more-services text-center'>
        <Link
          to="/"
          className="font-semibold transition-colors text-theme-default duration-200  text-lg border border-theme-default bg-transparent hover:bg-theme-default hover:border-theme-default
          hover:text-white rounded-md py-3 px-6"
          aria-label="Discover More"
          title="Discover More"
        >
          More Services
        </Link>
      </div>
    </div>
  );
};

export default Services;