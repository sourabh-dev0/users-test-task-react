"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addUser } from "@/redux/actions/userActions";

export default function UserCreate() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleAddUser = (e: any) => {
    e.preventDefault();
    if (name && username && email) {
      const newUser = {
        id: Date.now(), // Temporary ID until it's set by the backend
        name,
        username,
        email,
      };
      dispatch(addUser(newUser));
      router.push('/users');
    }
  };

  return (
    <form className='w-full' onSubmit={handleAddUser}>
      <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>Add User</span>
      <div className='w-full py-2'>
        <label htmlFor="name" className='text-sm font-bold py-2 block'>Name</label>
        <input type='text' name='name' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='w-full py-2'>
        <label htmlFor="username" className='text-sm font-bold py-2 block'>Username</label>
        <input type='text' name='username' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='w-full py-2'>
        <label htmlFor="email" className='text-sm font-bold py-2 block'>Email</label>
        <input type='email' name='email' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='w-full py-2'>
        <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Submit</button>
      </div>
    </form>
  );
}
