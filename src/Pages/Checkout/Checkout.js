import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
  const { user } = useContext(AuthContext);

  console.log(user)
  const service = useLoaderData();
  const { title, _id, price } = service;
  const habdleOrderPlace = event => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.yourPhone.value;
    const message = form.message.value;
    const email = user?.email;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message

    }

    fetch('https://genius-car-server-ashy.vercel.app/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer, ${localStorage.getItem('genius-token')}`
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Sumited!!");
          form.reset()

        }
      })
      .catch(err => console.err(err))

    console.log(name, phone, message);

  }
  return (
    <div className='container mx-auto my-20'>
      <h2 className='text-3xl mb-4'>Order about: {title}</h2>
      <form onSubmit={habdleOrderPlace}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <input type="text" name="firstName" placeholder="First Name" className="input input-bordered w-full" />
          <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full" />
          <input type="text" name="yourPhone" placeholder="Your Phone" className="input input-bordered w-full" />
          <input type="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" />
        </div>
        <textarea name="message" className="textarea w-full textarea-bordered mt-10" placeholder="Message"></textarea>
        {/* <button className="btn btn-warning">Warning</button> */}
        <input className="btn btn-warning mt-5" type="submit" value="Order Confirm" />
      </form>
    </div>
  );
};

export default Checkout;