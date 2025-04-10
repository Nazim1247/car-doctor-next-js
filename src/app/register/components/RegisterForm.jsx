"use client"

import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/components/SocialLogin";
import Link from "next/link";

const RegisterForm = () => {
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({name,email,password})
        await registerUser({name,email,password});
    }
    return (
        <div className="w-full md:w-2/3 mx-auto">
            <div className="card bg-base-100 w-full shadow-2xl">
      <div className="card-body">
        <SocialLogin />
        <div className="divider">OR</div>
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="fieldset-label">Name</label>
          <input name='name' type="text" className="input w-full" placeholder="Name" />
          <label className="fieldset-label">Email</label>
          <input name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input name='password' type="password" className="input w-full" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <Link href={'/login'}>Already have an account? Please <samp className="text-red-600">Login</samp></Link>
      </div>
    </div>
        </div>
    );
};

export default RegisterForm;