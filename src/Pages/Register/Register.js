import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
  const navigate = useNavigate()
  const { createUser } = useContext(AuthContext)
  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        toast.success('Regitration Successfull!!');
        navigate('/login')
        console.log(user);
      })
      .catch(err => console.err(err))
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto my-20'>
      <div>
        <img src={loginImg} alt="" />
      </div>
      <div className="w-full border border-gray-400 p-8 space-y-3 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <p className="text-xs text-center sm:px-6 text-gray-700">Already have an account?
          <Link to='/login' className="underline text-theme-default">Sign in</Link>
        </p>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-700">Nmae</label>
            <input type="text" name="name" required placeholder="Name" className="w-full px-4 py-3 rounded-md border border-gray-900  text-gray-100 focus:border-theme-default outline-gray-500" />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-900  text-gray-100 focus:border-theme-default outline-gray-500" />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-400  text-gray-900 focus:border-theme-default outline-gray-500" />
            <div className="flex justify-end text-xs text-gray-700">
              <a rel="noopener noreferrer" href="/">htmlForgot Password?</a>
            </div>
          </div>
          <input type='submit' value="Sign Up" className="block w-full p-3 text-center rounded-lg text-theme-default text-xl font-bold border border-theme-default hover:bg-theme-default duration-200 hover:text-white cursor-pointer" />
        </form>
        <SocialLogin />
      </div>

    </div>
  );
};

export default Register;