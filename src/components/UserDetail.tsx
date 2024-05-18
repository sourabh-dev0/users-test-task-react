import React from 'react';
import { useRouter, useParams } from 'next/navigation';

interface UserDetailProps {
  id: number;
  name: string;
  username: string;
  email: string;
  deleteUser: (id: number) => void;
  updateUser: (user: any) => void;
}

const UserDetail: React.FC<UserDetailProps> = ({ id, name, username, email, deleteUser, updateUser }) => {
  const router = useRouter();

  const handleDelete = () => deleteUser(id);
  const handleUpdate = () => {
    const updatedUser = { id, name, username, email };
    router.push(`/users/edit/${id}`)
    // updateUser(updatedUser);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button onClick={handleUpdate} className="bg-blue-500 p-2 text-white">Update</button>
        <button onClick={handleDelete} className="bg-red-500 p-2 text-white">Delete</button>
      </td>
    </tr>
  );
};

export default UserDetail;
