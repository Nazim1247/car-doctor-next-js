import React from 'react';
import LoginForm from './components/LoginForm';
// import Image from 'next/image';
// import loginImage from '/image/login.webp';

const page = () => {
    return (
        <div>
            <div className="hero bg-base-200">
  <div className="hero-content flex-col w-full">
  <h1 className="text-2xl font-bold">Login now!</h1>
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <Image src={'/image/login.webp'} width={300} height={300} alt='login image'/>
    </div> */}
    <LoginForm />
  </div>
</div>
        </div>
    );
};

export default page;