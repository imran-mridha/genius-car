import React, { useEffect, useState } from 'react';

const Order = ({ order, handleDeleteService, handleUpdateStatus }) => {
  console.log(order);
  const { _id, customer, serviceName, service, phone, price, status } = order;
  console.log(status);
  const [orderService, setOrderService] = useState({})

  useEffect(() => {
    fetch(`https://genius-car-server-ashy.vercel.app/service/${service}`)
      .then(res => res.json())
      .then(data => setOrderService(data))

  }, [service])
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDeleteService(_id)} className='btn btn-ghost'>X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {
                orderService?.img &&
                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
              }
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        <span className="badge badge-ghost badge-sm">{price}</span>
      </td>
      {/* <td>Purple</td> */}
      <th>
        <button onClick={() => handleUpdateStatus(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
      </th>
    </tr>
  );
};

export default Order;