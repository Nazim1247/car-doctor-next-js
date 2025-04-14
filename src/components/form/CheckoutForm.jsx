"use client";

import { useSession } from "next-auth/react";

const CheckoutForm = ({data}) => {
    const {data: session} = useSession();
    // console.log(session);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const amount = form.amount.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const address = form.address.value;
        const bookingPayload = {name,email,phone,date,amount,address,service_id: data._id,service_name: data.title,service_img: data.img,service_price: data.price}
        // console.log(bookingPayload);

        const res = await fetch('https://next-js-car-doctor-nine.vercel.app/api/service',{
            method: 'POST',
            body: JSON.stringify(bookingPayload),
        })
        const postedResponse = await res.json();
        console.log('posted data',postedResponse);
    }
    return (
        <div className="md:w-2/3 mx-auto">
            <h2 className="text-2xl font-bold text-center">Book Service</h2>
            <form onSubmit={handleSubmit} className="fieldset">
          <label className="fieldset-label">Name</label>
          <input defaultValue={session?.user?.name} name='name' type="text" className="input w-full" placeholder="Name" readOnly/>
          <label className="fieldset-label">Email</label>
          <input defaultValue={session?.user?.email} name='email' type="email" className="input w-full" placeholder="Email" readOnly/>
          <label className="fieldset-label">Due Amount</label>
          <input defaultValue={data?.price} name='amount' type="text" className="input w-full" placeholder="Amount" readOnly/>
          <label className="fieldset-label">Phone</label>
          <input name='phone' type="text" className="input w-full" placeholder="Phone" />
          <label className="fieldset-label">Date</label>
          <input name='date' type="date" className="input w-full" placeholder="Date" />
          <label className="fieldset-label">Address</label>
          <input name='address' type="text" className="input w-full" placeholder="Address" />
          <button className="btn btn-neutral mt-4">Order Confirm</button>
        </form>
        </div>
    );
};

export default CheckoutForm;