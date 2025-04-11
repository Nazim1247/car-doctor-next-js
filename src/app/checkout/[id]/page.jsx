import CheckoutForm from '@/components/form/CheckoutForm';
import React from 'react';

const page = async ({params}) => {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
    const data = await res.json()
    return (
        <div>
            {/* {JSON.stringify(data)} */}
            <CheckoutForm data={data}/>
        </div>
    );
};

export default page;