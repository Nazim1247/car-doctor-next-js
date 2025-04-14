import BookingUpdateForm from '@/components/form/BookingUpdateForm';
import { headers } from 'next/headers';
import React from 'react';

const page =async ({params}) => {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/my-bookings/${p.id}`,{
        headers: await headers(),
    });
    const data = await res.json();

    return (
        <div>
            <BookingUpdateForm data={data}/>
        </div>
    );
};

export default page;