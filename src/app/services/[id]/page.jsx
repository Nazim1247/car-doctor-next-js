import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

const page = async ({params}) => {
    const p = await params;
    const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
    const data = await servicesCollection.findOne({_id: new ObjectId(p.id)});

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
                <Image src={data.img} width={400} height={200} alt={data.title}/>
                <h2 className='text-2xl font-bold'>{data.title}</h2>
                <p>{data.description}</p>
            </section>
        </div>
    );
};

export default page;