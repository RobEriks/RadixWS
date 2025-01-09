import React from "react";

const Cards = () => {
  const stats = [
    { title: "Total Revenue", value: "$45,231.89" },
    { title: "Subscriptions", value: "+2,350" },
    { title: "Sales", value: "+12,234" },
    { title: "Active Now", value: "+573" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800 p-4 rounded shadow-md text-center"
        >
          <h3 className="text-sm font-semibold">{stat.title}</h3>
          <p className="text-xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
