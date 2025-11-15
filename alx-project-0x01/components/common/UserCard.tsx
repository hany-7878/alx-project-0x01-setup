import React from "react";
import { UserData } from "@/interfaces";

interface UserCardProps {
  user: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { name, username, email, address, phone, website, company } = user;

  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-gray-700 mb-1">Username: {username}</p>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-700 mb-1">
        Address:{" "}
        {address
          ? `${address.street || ""}, ${address.suite || ""}, ${address.city || ""} - ${address.zipcode || ""}`
          : "N/A"}
      </p>
      <p className="text-gray-700 mb-1">Phone: {phone || "N/A"}</p>
      <p className="text-gray-700 mb-1">Website: {website || "N/A"}</p>
      <p className="text-gray-700 mb-1">
        Company: {company ? company.name : "N/A"}
      </p>
    </div>
  );
};

export default UserCard;
