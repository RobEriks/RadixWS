import React from "react";
import { Flex, Text, Button } from "@radix-ui/themes";

const Menu = () => {
  return (
    <header className="flex items-center justify-between bg-[#000] text-white px-6 py-4 shadow-md border-b border-gray-700">
      <Flex align="center" gap="6">
        <Text size="4" weight="bold" className="text-gray-200">
          shadcn/ui
        </Text>
        <nav className="hidden md:flex gap-4">
          <a href="#docs" className="text-gray-400 hover:text-white text-sm">
            Docs
          </a>
          <a href="#components" className="text-gray-400 hover:text-white text-sm">
            Components
          </a>
          <a href="#blocks" className="text-gray-400 hover:text-white text-sm">
            Blocks
          </a>
          <a href="#charts" className="text-gray-400 hover:text-white text-sm">
            Charts
          </a>
          <a href="#themes" className="text-gray-400 hover:text-white text-sm">
            Themes
          </a>
          <a href="#colors" className="text-gray-400 hover:text-white text-sm">
            Colors
          </a>
        </nav>
      </Flex>


      <Flex align="center" gap="6">

        <Button variant="soft" size="3" className="bg-gray-900 text-gray-300 px-4 py-2 w-64 flex items-center justify-between">
          <span>Search documentation...</span>
          <span className="text-gray-500 flex items-center gap-1">
            <span className="text-sm">⌘</span>
            <span className="text-sm">K</span>
          </span>
        </Button>

        <Button className="w-5 h-5 hover:opacity-40">
        <a href="https://github.com">
          <img
            src="/src/assets/github.png"
            alt="GitHub"
            className="w-5 h-5"
          />
        </a>
        </Button>
      </Flex>
    </header>
  );
};

export default Menu;
