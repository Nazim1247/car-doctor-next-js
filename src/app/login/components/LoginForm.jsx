"use client"
import Link from "next/link";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
    const router = useRouter();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast('Submitting....');
        // console.log({email,password})
        try {
            const response = await signIn('credentials', {email,password,redirect:false});
            if(response.ok){
                router.push('/');
                toast.success('Login Successfully!');
            }else{
                toast.error('Authentication Failed');
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <div className="w-full md:w-2/3 mx-auto">
            <div className="card bg-base-100 w-ful shadow-2xl">
      <div className="card-body">
      <SocialLogin />
      <div className="divider">OR</div>
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="fieldset-label">Email</label>
          <input name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input name='password' type="password" className="input w-full" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <Link href={'/register'}>Are You New? Please <samp className="text-red-600">Register</samp></Link>
      </div>
    </div>
        </div>
    );
};

export default LoginForm;