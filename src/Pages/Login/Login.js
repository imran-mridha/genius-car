import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { setAuthToken } from '../../api/auth';

const Login = () => {

  const { logInUser } = useContext(AuthContext)


  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    logInUser(email, password)
      .then(result => {
        const user = result.user;

        // const currentUser = {
        //   email: user.email
        // }
        // fetch('https://genius-car-server-ashy.vercel.app/jwt', {
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(currentUser)
        // })
        //   .then(res => res.json())
        //   .then(data => {
        //     localStorage.setItem('genius-token', data.token);
        //     toast.success('login Success!!!')
        //     navigate(from, { replace: true });
        //   })
        setAuthToken(user)
      })
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto my-20'>
      <div>
        <img src={loginImg} alt="" />

      </div>
      <div className="w-full border border-gray-400 p-8 space-y-3 rounded-xl ">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <p className="text-xs text-center sm:px-6 text-gray-700">Don't have an account?
          <Link to='/register' className="underline text-theme-default">Sign up</Link>
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-700">Email</label>
            <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-900  text-gray-100 focus:border-theme-default outline-gray-500" />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-400  text-gray-900 focus:border-theme-default outline-gray-500" />
            <div className="flex justify-end text-xs text-gray-700">
              <a rel="noopener noreferrer" href="/">htmlForgot Password?</a>
            </div>
          </div>
          <input type='submit' value="Sign in" className="block w-full p-3 text-center rounded-lg text-theme-default text-xl font-bold border border-theme-default hover:bg-theme-default duration-200 hover:text-white cursor-pointer" />
        </form>
        <SocialLogin />
      </div>

    </div>
  );
};

export default Login;