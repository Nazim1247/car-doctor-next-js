"use client"

import { registerUser } from "@/app/actions/auth/registerUser";

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
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="fieldset-label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
          <label className="fieldset-label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default RegisterForm;