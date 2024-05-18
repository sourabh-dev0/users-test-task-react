"use client";
import React, { useEffect } from "react";
import UserDetail from "./UserDetail";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersSuccess, fetchUsersFailure, addUser, deleteUser, updateUser } from "@/redux/actions/userActions";

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);
  const error = useSelector((state: any) => state.error);

  useEffect(() => {
    if (!users) { // Fetch users only if they are not already fetched
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

  const handleAddUser = (user: any) => {
    dispatch(addUser(user));
  };

  const handleDeleteUser = (id: number) => {
    dispatch(deleteUser(id));
  };

  const handleUpdateUser = (user: any) => {
    
    dispatch(updateUser(user));
  };

  return (
    <div className="w-full max-w-7xl m-auto">
      <table className="w-full border-collapse border border-slate-400">
        <caption className="caption-top py-5 font-bold text-green-500 text-2xl">
          List Users - Counter :
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
              <Link href={`/users/create`} className="bg-green-500 p-2 inline-block text-white">
                Create
              </Link>
            </td>
          </tr>
          {users &&
            users.map((item: any) => (
              <UserDetail key={item.id} {...item} deleteUser={handleDeleteUser} updateUser={handleUpdateUser} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
