import React, { useState, useEffect } from 'react'
import axios from 'axios';



const Registration = () => {

    const api = axios.create({
        baseURL: 'http://localhost:5000/api'
      });

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
    });

    const handleInputChange = (e) => {
       const {name, value} = e.target;
       setFormData((inputData) => ({
        ...inputData,
        [name]: value,
       }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/register', formData);
            console.log(response.data);
            return response.data;
            // Handle success, such as displaying a success message or redirecting to another page
          } catch (error) {
            console.log(error);  
        }
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const response = await api.post('/register', {
    //         first_name: formData.first_name,
    //         last_name: formData.last_name,
    //         email: formData.email,
    //         password: formData.password,
    //         address: formData.address,
    //         phone: formData.phone
    //       });
      
    //       console.log(response.data);
    //       // Handle success, such as displaying a success message or redirecting to another page
    //     } catch (error) {
    //       console.log(error);
    //       // Handle error, such as displaying an error message
    //     }
    //   };
       

    // api.post('/register', formData).then((response) => {
    //     console.log(response.data);
    // }).catch((err) => {
    //     console.log(err);
    // })

    


  return (
    <div className='bg-black h-screen'>
       <form onSubmit={handleSubmit}>
            <div className="space-y-1">
            <div className="border-b border-gray-900/10 pb-12">

            <div className='flex justify-center'>
            <h1 className='text-3xl font-bold text-[#F2CD5C] hover:scale-105 duration-300'>NINETY</h1>
            <h1 className='text-3xl font-bold text-[#F2CD5C] hover:scale-105 duration-300'>3</h1>
            </div>
                
                <h1 className="text-base font-semibold leading-7 text-white text-900">Registration</h1>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-start-2 sm:col-end-4">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white text-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="first_name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-black text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        />
                    </div>
                    </div>

                    <div className="sm:col-start-4 sm:col-end-6">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white text-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="last_name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-black text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        />
                    </div>
                    </div>

                    <div className="sm:col-start-2 sm:col-end-4">
                    <label htmlFor="email address" className="block text-sm font-medium leading-6 text-white text-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="email"
                        id="email address"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-black text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        />
                    </div>
                    </div>

                    <div className="sm:col-start-4 sm:col-end-6">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white text-900">
                        password
                    </label>
                    <div className="mt-2">
                        <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-black text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        />
                    </div>
                    </div>
                    
                    <div className="sm:col-start-3 sm:col-end-5">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white text-900">
                        Contact Number
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-black text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        />
                    </div>
                    </div>

                    <div className="sm:col-start-2 sm:col-end-6">
                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-white text-900">
                        Address
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="address"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 py-1.5 text-black text-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        />
                    </div>
                    </div>

                </div>
            </div>

        </div>
        <div className='flex justify-center'>
            <button
                type="submit"
                className="w-3/5 justify-center rounded-md bg-[#F2CD5C] bg-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#F49D1A] hover:bg-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F49D1A] focus-visible:outline-600">
                Register
            </button>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <a href='/login' className="font-semibold leading-6 text-[#F2CD5C] text-600 hover:text-[#F49D1A] hover:text-500">
            Sign in here
            </a>
        </p>

    </form> 
    </div>
  )
}

export default Registration