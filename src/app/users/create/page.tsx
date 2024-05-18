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
  const [phone, setPhone] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [suite, setSuite] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [catchPhrase, setCatchPhrase] = useState<string>('');
  const [bs, setBs] = useState<string>('');

  const handleAddUser = (e: any) => {
    e.preventDefault();
    if (name && username && email && phone && website && street && suite && city && zipcode && companyName && catchPhrase && bs) {
      const newUser = {
        id: Date.now(), 
        name,
        username,
        email,
        phone,
        website,
        address: {
          street,
          suite,
          city,
          zipcode,
        },
        company: {
          name: companyName,
          catchPhrase,
          bs,
        },
      };
      dispatch(addUser(newUser));
      router.push('/users');
    }
  };

  return (
    <div className="w-full max-w-2xl m-auto p-6 bg-white shadow-md rounded-lg">
      <form className='w-full' onSubmit={handleAddUser}>
        <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>Add User</span>
        
        <div className='w-full py-2'>
          <label htmlFor="name" className='text-sm font-bold py-2 block'>Name</label>
          <input
            type='text'
            name='name'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className='w-full py-2'>
          <label htmlFor="username" className='text-sm font-bold py-2 block'>Username</label>
          <input
            type='text'
            name='username'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className='w-full py-2'>
          <label htmlFor="email" className='text-sm font-bold py-2 block'>Email</label>
          <input
            type='email'
            name='email'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className='w-full py-2'>
          <label htmlFor="phone" className='text-sm font-bold py-2 block'>Phone</label>
          <input
            type='text'
            name='phone'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        
        <div className='w-full py-2'>
          <label htmlFor="website" className='text-sm font-bold py-2 block'>Website</label>
          <input
            type='text'
            name='website'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </div>

        <div className='w-full py-2'>
          <label htmlFor="street" className='text-sm font-bold py-2 block'>Street</label>
          <input
            type='text'
            name='street'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>
        
        <div className='w-full py-2'>
          <label htmlFor="suite" className='text-sm font-bold py-2 block'>Suite</label>
          <input
            type='text'
            name='suite'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setSuite(e.target.value)}
            required
          />
        </div>
        
        <div className='w-full py-2'>
          <label htmlFor="city" className='text-sm font-bold py-2 block'>City</label>
          <input
            type='text'
            name='city'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        
        <div className='w-full py-2'>
          <label htmlFor="zipcode" className='text-sm font-bold py-2 block'>Zipcode</label>
          <input
            type='text'
            name='zipcode'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
        </div>
        
        <div className='w-full py-2'>
          <label htmlFor="companyName" className='text-sm font-bold py-2 block'>Company Name</label>
          <input
            type='text'
            name='companyName'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        
        <div className='w-full py-2'>
          <label htmlFor="catchPhrase" className='text-sm font-bold py-2 block'>Catch Phrase</label>
          <input
            type='text'
            name='catchPhrase'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setCatchPhrase(e.target.value)}
            required
          />
        </div>

        <div className='w-full py-2'>
          <label htmlFor="bs" className='text-sm font-bold py-2 block'>BS</label>
          <input
            type='text'
            name='bs'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            onChange={(e) => setBs(e.target.value)}
            required
          />
        </div>
        
        <div className='w-full py-2'>
          <button className="w-full p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400 hover:bg-green-500 transition duration-200">Submit</button>
        </div>
      </form>
    </div>
  );
}
