
import DeleteBookingButton from "@/app/my-bookings/components/DeleteBookingButton";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";


const MyBookingTables = ({data}) => {
// console.log(data)
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Service Image</th>
        <th>Service Name</th>
        <th>Service Date</th>
        <th>Service Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {data.map((item)=>{
        return (
            <tr key={item._id}>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <Image src={item.service_img} width={50} height={50} alt={item.service_name}/>
              </div>
            </div>
            
          </div>
        </td>
        <td>
        {item.service_name}
        </td>
        <td>{item.date}</td>
        <td>{item.service_price}</td>
        <td><FaEdit className='text-xl text-orange-500'/></td>
        <td>
            <DeleteBookingButton id={item._id}/>
        </td>
        
      </tr>
        )
      })}
      
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyBookingTables;