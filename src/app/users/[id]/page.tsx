"use client";
import React from "react";
import { useRouter, useParams } from 'next/navigation';
import { useSelector } from 'react-redux';

const UserDetail: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const users = useSelector((state: any) => state.users);
  const user = users.find((user: any) => user.id == id);

  if (!user) {
    router.push('/users');
    return null;
  }

  return (
    <div className="w-full max-w-2xl m-auto p-6 bg-white shadow-md rounded-lg">
      <div className="w-full py-2">
        <span className="font-bold text-yellow-500 py-2 block underline text-2xl">User Details</span>
        <p className="text-lg py-2"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg py-2"><strong>Username:</strong> {user.username}</p>
        <p className="text-lg py-2"><strong>Email:</strong> {user.email}</p>
        <p className="text-lg py-2"><strong>Phone:</strong> {user.phone}</p>
        <p className="text-lg py-2"><strong>Website:</strong> {user.website}</p>
        <p className="text-lg py-2"><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p className="text-lg py-2"><strong>Company:</strong> {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>
      </div>
      <div className='w-full py-2'>
        <button className="w-full p-2 text-white border-gray-200 border-[1px] rounded-sm bg-blue-400 hover:bg-blue-500 transition duration-200" onClick={() => router.push('/users')}>
          Back to Users
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
