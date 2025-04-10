import React from 'react';
import RegisterForm from './components/RegisterForm';

const page = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col w-full">
  <h1 className="text-2xl font-bold">Register now!</h1>
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div> */}
    <RegisterForm />
  </div>
</div>
        </div>
    );
};

export default page;