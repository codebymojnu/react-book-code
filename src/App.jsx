import { useState } from "react";

function UsersTable({ users, handleUserInfo, handleUserDelete }) {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-700">
              Name
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">
              Mobile
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              onClick={() => handleUserInfo(user?.id)}
            >
              <td className="px-4 py-2 text-gray-800">{user?.name}</td>
              <td className="px-4 py-2 text-gray-800">{user?.email}</td>
              <td
                className="px-4 py-2 text-red-500 cursor-pointer hover:text-red-700"
                onClick={(e) => handleUserDelete(e, user?.id)}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <div>
      <p>Name: {user?.name}</p>
      <p>User ID: {user?.id}</p>
    </div>
  );
}

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Mark Johnson",
      email: "mark.johnson@example.com",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.brown@example.com",
    },
  ]);

  const [user, setUser] = useState(null);

  function handleUserInfo(id) {
    const userInfo = users?.filter((user) => user?.id == id);
    setUser(userInfo[0]);
  }

  function handleUserDelete(e, id) {
    e.stopPropagation();
    const presentUsers = users?.filter((user) => user?.id !== id);
    setUsers(presentUsers);
  }

  return (
    <>
      {user && <UserProfile user={user} />}
      <UsersTable
        users={users}
        handleUserInfo={handleUserInfo}
        handleUserDelete={handleUserDelete}
      />
    </>
  );
}
