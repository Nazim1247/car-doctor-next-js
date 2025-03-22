import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react';

const Services = async () => {
    const servicesCollection = dbConnect('test-services');
    const data = await servicesCollection.find({}).toArray();
    
    return (
        <div className='grid grid-cols-12'>
            {data.map((item)=>{
                return (
                    <div className='col-span-12 md:col-span-6 lg:col-span-4' key={item._id}>
                        <Image src={item.img} width={314} height={208} alt={item.title}/>
                        <h2>{item.title}</h2>
                    </div>
                )
            })}
        </div>
    );
};

export default Services;