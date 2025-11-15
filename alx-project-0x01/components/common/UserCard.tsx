import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition bg-white">
      <h2 className="text-xl font-bold mb-2">{name} ({username})</h2>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-700 mb-1">
        Address: {address.street}, {address.suite}, {address.city} - {address.zipcode}
      </p>
      <p className="text-gray-700 mb-1">Phone: {phone}</p>
      <p className="text-gray-700 mb-1">Website: {website}</p>
      <p className="text-gray-700">Company: {company.name} - {company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;
