"use client";
import MyBookingTables from '@/components/tables/MyBookingTables';
import { useEffect, useState } from 'react';

const page = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fetchMyBookings = async()=>{
            const res = await fetch('http://localhost:3000/api/service');
            const d = await res.json();
            setData(d);
        }
        fetchMyBookings();
    },[])

    return (
        <div>
            <MyBookingTables data={data}/>
        </div>
    );
};

export default page;