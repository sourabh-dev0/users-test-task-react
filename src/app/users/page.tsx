"use client";
import React, { useEffect, useState } from "react";
import User from "../../components/User";
import Link from "next/link";
import { useDispatch } from "react-redux";


export default function Users() {
  const [users, setUsers] = useState<any[]>([]);

  const dispatch = useDispatch();
  


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const delete_User = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="w-full max-w-7xl m-auto">
      <table className="w-full border-collapse border border-slate-400">
        <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
          List Posts - Counter :
          <span className="text-red-500 font-bold">{users?.length}</span>
        </caption>
        <thead>
          <tr className="text-center">
            <th className="border border-slate-300">ID</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Username</th>
            <th className="border border-slate-300">Email</th>
            <th className="border border-slate-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5}>
              <Link href={`/user/create`} className="bg-green-500 p-2 inline-block text-white">Create</Link>
            </td>
          </tr>
          {users && users.map((item: any) => (
            <User key={item.id} {...item} deleteUser={delete_User} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
