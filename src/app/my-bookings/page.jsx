// "use client";
// import { useEffect, useState } from 'react';
import MyBookingTables from '@/components/tables/MyBookingTables';
import { headers } from 'next/headers';

const fetchMyBookings = async()=>{
    const res = await fetch('http://localhost:3000/api/service',{
        headers: headers(),
    });
    const d = await res.json();
    // setData(d);
    return d;
}

const page = async () => {
    const data = await fetchMyBookings()
    
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     const fetchMyBookings = async()=>{
    //         const res = await fetch('http://localhost:3000/api/service');
    //         const d = await res.json();
    //         setData(d);
    //     }
    //     fetchMyBookings();
    // },[])

    return (
        <div>
            <MyBookingTables data={data}/>
        </div>
    );
};

export default page;