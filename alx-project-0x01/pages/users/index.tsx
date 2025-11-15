import React from "react";

const UsersPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <ul className="list-disc list-inside">
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </div>
  );
};

export default UsersPage;
