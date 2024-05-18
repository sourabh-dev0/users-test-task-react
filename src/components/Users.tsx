"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersSuccess, fetchUsersFailure, deleteUser } from "@/redux/actions/userActions";
import { useRouter } from 'next/navigation';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const users = useSelector((state: any) => state.users);
  const error = useSelector((state: any) => state.error);

  useEffect(() => {
    if (!users || users.length === 0) { // Fetch users only if they are not already fetched
      const fetchUsers = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();
          dispatch(fetchUsersSuccess(data));
        } catch (error) {
          dispatch(fetchUsersFailure("Failed to fetch users"));
        }
      };

      fetchUsers();
    }
  }, [dispatch, users]);

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUser(id));
  };

  const handleEditUser = (id: number) => {
    router.push(`/users/edit/${id}`);
  };

  const handleViewUser = (id: number) => {
    router.push(`/users/${id}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center py-5">
        <div className="font-bold text-dark-400 text-3xl underline">Users</div>
        <div>
          <Link href="/users/create">
            <button className="p-2 bg-green-400 hover:bg-green-500 text-white rounded-md transition duration-200">Add New User</button>
          </Link>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {users && (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Username</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Phone</th>
              <th scope="col" className="px-6 py-3">Website</th>
              <th scope="col" className="px-6 py-3">Address</th>
              <th scope="col" className="px-6 py-3">Company</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.website}</td>
                <td className="px-6 py-4">
                  {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                </td>
                <td className="px-6 py-4">
                  {user.company.name}, {user.company.catchPhrase}, {user.company.bs}
                </td>
                <td className="px-6 py-4 flex !items-center !justify-center space-x-2 h-full">
                  <button
                    className="p-2 bg-blue-400 hover:bg-blue-500 text-white !justify-center rounded-md transition duration-200"
                    onClick={() => handleEditUser(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="p-2 bg-red-400 hover:bg-red-500 text-white rounded-md transition duration-200"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="p-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md transition duration-200"
                    onClick={() => handleViewUser(user.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
