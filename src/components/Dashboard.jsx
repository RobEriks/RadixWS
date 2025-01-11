import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@radix-ui/react-dropdown-menu";
import { Avatar } from "@radix-ui/react-avatar";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Card, Flex, Text, Button } from "@radix-ui/themes";
import Cards from "./Cards";
import Table from "./Table";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="bg-[#000000] text-white">
      <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="flex items-center gap-2 bg-[#121216] px-3 py-2 rounded-lg hover:bg-gray-700">
                <span>Alicia Koch</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 text-white p-2 rounded-md">
              <DropdownMenuItem shortcut="⌘ E" className="hover:bg-gray-700 p-2">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem shortcut="⌘ D" className="hover:bg-gray-700 p-2">
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-2 border-t border-gray-600" />
              <DropdownMenuItem shortcut="⌘ N" className="hover:bg-gray-700 p-2">
                Archive
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="hover:bg-gray-700 p-2 rounded flex justify-between items-center">
                  More
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="bg-gray-800 p-2 rounded-md shadow-md">
                  <DropdownMenuItem className="hover:bg-gray-700 p-2 rounded">
                    Move to project…
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-700 p-2 rounded">
                    Move to folder…
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="my-2 border-t border-gray-600" />
                  <DropdownMenuItem className="hover:bg-gray-700 p-2 rounded">
                    Advanced options…
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator className="my-2 border-t border-gray-600" />
              <DropdownMenuItem className="hover:bg-gray-700 p-2 rounded">
                Share
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-700 p-2 rounded">
                Add to favorites
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-2 border-t border-gray-600" />
              <DropdownMenuItem
                shortcut="⌘ ⌫"
                color="red"
                className="hover:bg-gray-700 p-2 rounded text-red-500"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <nav className="flex gap-6">
            {["Overview", "Customers", "Products", "Settings"].map((item) => (
              <a
                key={item}
                href={""}
                className="text-gray-400 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <Button variant="soft" size="3">
          <span>Search...</span>
        </Button>
      </div>


      <div className="p-6">
      <div className="">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <Button variant="soft" size="3">
          <span>Download</span>
        </Button>
      </div>


      <div className="flex gap-4 mb-4">
        {["Overview", "Analytics", "Reports", "Notifications"].map(
          (tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg ${
                tab === "Overview"
                  ? "bg-[#121216] text-white"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>
    </div>
    <Cards />
    <div className="flex flex-row gap-4 mt-8">
      <div className="flex-1">
      <Chart />
      </div>
        <div className="flex-2">
        <Table />
        </div>
        
    </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
