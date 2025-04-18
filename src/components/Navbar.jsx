"use client";
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Navbar = () => {
  const router = useRouter();
const {data: session,status} = useSession();
// console.log(session)
    const navMenu = ()=>{
        return <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/services'}>Services</Link></li>
        <li><Link href={'/blogs'}>Blogs</Link></li>
        <li><Link href={'/my-bookings'}>My Bookings</Link></li>
        </>  
    }

    const handleLogout = ()=>{
      signOut({redirect:false});
      router.push('/login');
      toast.success('Logout Successfully!');
    }
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar max-w-[1250px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        {navMenu()}
      </ul>
    </div>
    <Link href={'/'} className="text-xl">
        <Image src={'/assets/logo.svg'} width={50} height={50} alt='logo image'/>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {navMenu()}
    </ul>
  </div>
  <div className="navbar-end">
    {status === 'authenticated'? 
    <>
    <button onClick={handleLogout} className='btn btn-sm btn-ghost text-lg'>Logout</button>
    <Image src={session?.user?.image} width={40} height={40} alt='profile image' className='rounded-full'/>
    </>
    :
    <Link href={'/login'} className='btn btn-sm btn-ghost text-lg'>Login</Link>
    }
  
    <a className="btn btn-sm btn-outline ml-2">Appointment</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;