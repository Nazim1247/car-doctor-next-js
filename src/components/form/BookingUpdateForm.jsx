"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const BookingUpdateForm = ({data}) => {
    const router = useRouter();
    const {data: session} = useSession();
    // console.log(session);
    // console.log(data);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        
        const phone = form.phone.value;
        const date = form.date.value;
        const address = form.address.value;
        const updatePayload = {phone,date,address,}
        // console.log(bookingPayload);

        const res = await fetch(`http://localhost:3000/api/my-bookings/${data._id}`,{
            method: 'PATCH',
            body: JSON.stringify(updatePayload),
        })
        const postedResponse = await res.json();
        router.push('/my-bookings')
        console.log('updated data',postedResponse);
    }
    return (
        <div className="md:w-2/3 mx-auto">
            <h2 className="text-2xl font-bold text-center">Update Service</h2>
            <form onSubmit={handleSubmit} className="fieldset">
          <label className="fieldset-label">Name</label>
          <input defaultValue={session?.user?.name} name='name' type="text" className="input w-full" placeholder="Name" readOnly/>
          <label className="fieldset-label">Email</label>
          <input defaultValue={session?.user?.email} name='email' type="email" className="input w-full" placeholder="Email" readOnly/>
          <label className="fieldset-label">Due Amount</label>
          <input defaultValue={data?.service_price} name='amount' type="text" className="input w-full" placeholder="Amount" readOnly/>
          <label className="fieldset-label">Phone</label>
          <input defaultValue={data?.phone} name='phone' type="text" className="input w-full" placeholder="Phone" />
          <label className="fieldset-label">Date</label>
          <input defaultValue={data?.date} name='date' type="date" className="input w-full" placeholder="Date" />
          <label className="fieldset-label">Address</label>
          <input defaultValue={data?.address} name='address' type="text" className="input w-full" placeholder="Address" />
          <button className="btn btn-neutral mt-4">Update Confirm</button>
        </form>
        </div>
    );
};

export default BookingUpdateForm;