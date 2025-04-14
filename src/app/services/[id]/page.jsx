
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async ({params}) => {
    const p = await params;
    const res = await fetch(`https://next-js-car-doctor-nine.vercel.app/api/service/${p.id}`);
    const data = await res.json()

    return (
        <div className='max-w-[1250px] mx-auto mt-6'>
            <section className='relative'>
                <Image src={'/assets/images/checkout/checkout.png'} width={1137} height={300} alt='banner' className='mx-auto w-full'/>
            <div className='absolute overlay-bg w-full h-full top-0'>
                <div className='w-full h-full flex items-center ps-16 text-xl font-bold'>
                <div>
                <h2 className='text-white'>Service Details</h2>
                </div>
                </div>
            </div>
            </section>
            <section>
                <div className='flex justify-between'>
                <Image src={data.img} width={400} height={200} alt={data.title}/>
                <div className='p-4 shadow'>
                    <Link href={`/checkout/${data._id}`} className='text-white bg-amber-500 py-2 px-8 rounded-md'>Checkout</Link>
                <p className='mt-4'>Price: ${data.price}</p>
                </div>
                </div>
                <h2 className='text-2xl font-bold'>{data.title}</h2>
                <p>{data.description}</p>
            </section>
        </div>
    );
};

export default page;