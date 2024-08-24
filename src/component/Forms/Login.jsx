import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Handle login with email and password
    console.log(data);
  };


  return (
    <div className=" flex flex-col justify-center items-center h-[60%] md:h-screen w-full bg-gray-600 ">
      
      <div className="w-[90%] md:max-w-md bg-white px-6  py-4 rounded-lg shadow-md opacity-80">
        <div className=' relative bottom-2 flex justify-end '>
          <MdOutlineCancel className='text-red-800 h-8 w-10 cursor-pointer' onClick={()=>navigate('/')}/>
          </div>
        <h2 className="text-2xl font-bold text-center mb-8">Login to Your NGO Account</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button type="submit" className="w-full bg-violet-600 text-white p-3 rounded-lg">
            Login
          </button>
        </form>

        <div className="my-2 flex justify-center items-center">
          <span className="text-gray-400">or</span>
        </div>
          {/* Google Login Button */}
          <div className="mb-4">
                <button
                  className="bg-blue-500 text-white py-4 px-4 rounded-lg flex items-center justify-center w-full"
                >
                  <FaGoogle className='me-2 text-white'/> Sign in with Google
                </button>
          </div>


        <p className="text-center mt-4">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
