"use client";
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";

const DeleteBookingButton = ({id}) => {
    const router = useRouter();
    const handleDelete = async (id)=>{
        const res = await fetch(`http://localhost:3000/api/service/${id}`, {
            method: 'DELETE',
        })
        const data = await res.json();
        console.log(data);
        router.refresh();
    }
    return (
        <>
        <MdDeleteForever onClick={()=>handleDelete(id)} className='text-2xl text-red-500'/>
        </>
    );
};

export default DeleteBookingButton;