"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from "@/redux/actions/userActions";

export default function UserEdit() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);
  const user = users.find((user: any) => user.id == id);

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

  useEffect(() => {
    if (user) {
      setName(user.name);
      setUsername(user.username);
      setEmail(user.email);
      setPhone(user.phone);
      setWebsite(user.website);
      setStreet(user.address.street);
      setSuite(user.address.suite);
      setCity(user.address.city);
      setZipcode(user.address.zipcode);
      setCompanyName(user.company.name);
      setCatchPhrase(user.company.catchPhrase);
      setBs(user.company.bs);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      router.push('/users'); // Redirect if user not found
    }
  }, [user, router]);

  const handleUpdateUser = (e: any) => {
    e.preventDefault();
    if (name && username && email && phone && website && street && suite && city && zipcode && companyName && catchPhrase && bs) {
      const updatedUser = {
        id: user.id,
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
      dispatch(updateUser(updatedUser));
      router.push('/users');
    }
  };

  return (
    <div className="w-full max-w-2xl m-auto p-6 bg-white shadow-md rounded-lg">
      <form className='w-full' onSubmit={handleUpdateUser}>
        <span className='font-bold text-yellow-500 py-2 block underline text-2xl'>Edit User</span>
        
        <div className='w-full py-2'>
          <label htmlFor="name" className='text-sm font-bold py-2 block'>Name</label>
          <input
            type='text'
            name='name'
            className='w-full border-[1px] border-gray-200 p-2 rounded-sm'
            value={name}
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
            value={username}
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
            value={email}
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
            value={phone}
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
            value={website}
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
            value={street}
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
            value={suite}
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
            value={city}
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
            value={zipcode}
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
            value={companyName}
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
            value={catchPhrase}
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
            value={bs}
            onChange={(e) => setBs(e.target.value)}
            required
          />
        </div>
        
        <div className='w-full py-2'>
          <button className="w-full p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400 hover:bg-green-500 transition duration-200">Update</button>
        </div>
      </form>
    </div>
  );
}
