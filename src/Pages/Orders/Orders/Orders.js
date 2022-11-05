import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Order from '../Order/Order';

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(`https://genius-car-server-ashy.vercel.app/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer, ${localStorage.getItem('genius-token')}`
      }
    })
      .then(res => {
        console.log(res.stutus);
        if (res.status === 401 || res.status === 403) {
          return logOut()
        }
        return res.json();
        
      })
      .then(data => {
        setOrders(data);
      })
      .catch(err => console.error(err))
  }, [user?.email, logOut])

  const handleDeleteService = id => {
    const procced = window.confirm('Are you sure, want to cancel this service?');
    if (procced) {
      fetch(`https://genius-car-server-ashy.vercel.app/orders/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer, ${localStorage.getItem('genius-token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Service Cancel Success');
            const remaining = orders.filter(odr => odr._id !== id);
            setOrders(remaining)
          }
        })
    }
  }

  const handleUpdateStatus = id => {
    fetch(`https://genius-car-server-ashy.vercel.app/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer, ${localStorage.getItem('genius-token')}`
      },
      body: JSON.stringify({ status: 'Approved' })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter(odr => odr._id !== id);
          const approving = orders.find(odr => odr._id === id);
          approving.status = 'Approved';
          const newOrders = [approving, ...remaining];
          setOrders(newOrders)

        }
      })
  }

  return (
    <div className='container mx-auto my-20'>
      <h3>You Have {orders.length} Orders</h3>
      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">
          <tbody>
            {
              orders.map(order => <Order key={order._id} order={order} handleDeleteService={handleDeleteService} handleUpdateStatus={handleUpdateStatus} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;