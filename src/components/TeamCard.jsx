import React from "react";

const TeamCard = ({ image, name, desc, title, bio }) => {
  return (
    <div className="flip-card bg-white rounded-lg shadow-md p-6 text-center">
      {" "}
      {/* Apply flip-card class */}
      <div className="flip-card-inner">
        {" "}
        {/* Apply flip-card-inner class */}
        {/* Front Face */}
        <div className="flip-card-front bg-white p-6 rounded-lg">
          {" "}
          {/* Apply flip-card-front class */}
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <small>{desc}</small>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
        {/* Back Face */}
        <div className="flip-card-back p-6 rounded-lg">
          {" "}
          {/* Apply flip-card-back class */}
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Bio</h3>
          <p className="text-blue-700 text-sm text-center">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
