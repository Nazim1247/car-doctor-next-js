import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Services = async () => {
    const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
    const data = await servicesCollection.find({}).toArray();
    
    return (
        <div className='grid grid-cols-12 gap-4'>
            {data.map((item)=>{
                return (
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 shadow bg-base-200 py-4' key={item._id}>
                        <Image src={item.img} width={314} height={208} alt={item.title} className='mx-auto'/>
                        <div className='flex items-center justify-around'>
                        <div>
                        <h2 className='text-xl font-semibold'>{item.title}</h2>
                        <p className='font-semibold text-orange-500'>Price: ${item.price}</p>
                        </div>
                        
                        <Link href={`/services/${item._id}`}><FaArrowRightLong className='text-xl text-orange-500'/></Link>
                        
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Services;