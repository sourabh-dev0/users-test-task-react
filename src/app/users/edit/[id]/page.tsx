"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '@/redux/actions/userActions';

const UserUpdate: React.FC = () => {
  const router = useRouter();
  const { id } = useParams(); // Assuming you are using Next.js dynamic routes
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.users?.find((user: any) => user.id === Number(id)));
  
  const [name, setName] = useState<string>(user?.name || '');
  const [username, setUsername] = useState<string>(user?.username || '');
  const [email, setEmail] = useState<string>(user?.email || '');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleUpdateUser = (e: any) => {
    e.preventDefault();
    if (name && username && email) {
      const updatedUser = {
        id: Number(id), // Use the existing user ID
        name,
        username,
        email,
      };
      dispatch(updateUser(updatedUser));
      router.push('/users'); // Navigate back to users list
    }
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <form className='w-full' onSubmit={handleUpdateUser}>
      <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>Update User</span>
      <div className='w-full py-2'>
        <label htmlFor="name" className='text-sm font-bold py-2 block'>Name</label>
        <input type='text' name='name' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='w-full py-2'>
        <label htmlFor="username" className='text-sm font-bold py-2 block'>Username</label>
        <input type='text' name='username' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='w-full py-2'>
        <label htmlFor="email" className='text-sm font-bold py-2 block'>Email</label>
        <input type='email' name='email' className='w-full border-[1px] border-gray-200 p-2 rounded-sm' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='w-full py-2'>
        <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Update</button>
      </div>
    </form>
  );
};

export default UserUpdate;
