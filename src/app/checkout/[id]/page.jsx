import CheckoutForm from '@/components/form/CheckoutForm';
import React from 'react';

const page = async ({params}) => {
    const p = await params;
    const res = await fetch(`https://next-js-car-doctor-nine.vercel.app/api/service/${p.id}`);
    const data = await res.json()
    return (
        <div>
            {/* {JSON.stringify(data)} */}
            <CheckoutForm data={data}/>
        </div>
    );
};

export default page;