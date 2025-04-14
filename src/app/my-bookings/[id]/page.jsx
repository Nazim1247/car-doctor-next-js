import BookingUpdateForm from '@/components/form/BookingUpdateForm';
import { headers } from 'next/headers';
import React from 'react';

const page =async ({params}) => {
    const p = await params;
    const res = await fetch(`https://next-js-car-doctor-nine.vercel.app/api/my-bookings/${p.id}`,{
        headers: new Headers(await headers()),
    });
    const data = await res.json();

    return (
        <div>
            <BookingUpdateForm data={data}/>
        </div>
    );
};

export default page;