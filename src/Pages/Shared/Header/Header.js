import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = ()=> {
    logOut()
    .then(() => {
      toast.success('Logout SuccessFull')
    })
    .catch(err => toast.err(err.message))
  }
  const menuItems = <>
    <li className='hover:text-theme-default'><Link to='/'>Home</Link></li>
    <li className='hover:text-theme-default'><Link to='/'>About</Link></li>
    <li className='hover:text-theme-default'><Link to='/'>Services</Link></li>
    <li className='hover:text-theme-default'><Link to='/'>Blog</Link></li>
    <li className='hover:text-theme-default'><Link to='/'>Contact</Link></li>
    {
      user?.email ?
        <>
          <li className='hover:text-theme-default'><Link to='/orders'>Orders</Link></li>
          <li onClick={handleLogOut} className='hover:text-theme-default'><Link>Logout</Link></li>
        </>
        :
        <li className='hover:text-theme-default'><Link to='/login'>Login</Link></li>
    }
  </>
  return (
    <div className="navbar container mx-auto bg-white h-16 flex items-center pt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="">
          <img className='w-9/12' src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div className='flex items-center'>
          <Link><FaShoppingBag className='text-slate-500'></FaShoppingBag></Link>
          <Link><FaSearch className='mx-5 text-slate-500' /></Link>
          <button className="border border-theme-default hover:bg-theme-default hover:text-white duration-500 py-2 rounded font-semibold px-8">Appoinment</button>
        </div>
      </div>
    </div>
  );
};

export default Header;