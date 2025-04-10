"use client";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const firstRender = useRef(true);
    const {data:session, status }= useSession();
    const router = useRouter();
    const handleSocialLogin = (providerName)=>{
        signIn(providerName);
    }

    useEffect(()=>{
        if (firstRender.current) {
            firstRender.current = false;
            return;
          }

        if(status === 'authenticated'){
            router.push('/');
            toast.success('Login Successfully!');
        }
    },[status])

    return (
        <div>
            <button onClick={()=>handleSocialLogin('google')} className='btn w-full'>
            <FcGoogle />
                Continue With Google</button>
        </div>
    );
};

export default SocialLogin;