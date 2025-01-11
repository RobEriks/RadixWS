import React from "react";

const Cards = () => {
  const cardData = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      growth: "+20.1% from last month",
      icon: "$",
    },
    {
      title: "Subscriptions",
      value: "+2350",
      growth: "+180.1% from last month",
      icon: "👥",
    },
    {
      title: "Sales",
      value: "+12,234",
      growth: "+19% from last month",
      icon: "📄",
    },
    {
      title: "Active Now",
      value: "+573",
      growth: "+201 since last hour",
      icon: "📈",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-[#121216] text-white rounded-lg p-6 shadow-md flex flex-col justify-between"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <span className="text-2xl">{card.icon}</span>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold">{card.value}</p>
            <p className="text-sm text-gray-400 mt-1">{card.growth}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
