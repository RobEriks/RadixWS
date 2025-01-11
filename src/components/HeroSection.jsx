import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Button, Flex, Text, Box } from "@radix-ui/themes";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const HeroSection = () => {
  return (
    <section className="bg-[#000] border-t text-white px-8 py-16 border-b border-gray-700">

      <Flex align="center" gap="2" className="mb-6">
        <Text
          size="3"
          weight="medium"
          className="text-gray-400 uppercase"
        >
          Monorepo support
        </Text>
        <ArrowRightIcon className="w-5 h-5 text-gray-400" />
      </Flex>


      <div className="mb-4">
        <h1 className="text-5xl font-extrabold">
          Build your component library
        </h1>
      </div>


      <div className="mb-8">
        <p className="text-lg text-gray-400">
          Beautifully designed components that you can copy and paste into your
          apps.
          <br />
          Made with Tailwind CSS. Open source.
        </p>
      </div>


      <Flex gap="4">
        <Button
          variant="solid"
          size="3"
          className="bg-white text-black hover:bg-gray-200"
        >
          Get Started
        </Button>


        <Button
          variant="outline"
          size="3"
          className="border-white text-white hover:bg-gray-800"
        >
          Browse Blocks
        </Button>
      </Flex>


      <Tabs.Root defaultValue="examples" className="mt-10 border-t border-gray-700 pt-4">
      <Tabs.List className="flex gap-4 border-b border-gray-700 pb-4">
  <Tabs.Trigger
    value="examples"
    className="text-gray-400 hover:text-white text-sm px-4 py-2 rounded-full data-[state=active]:bg-[#121216] data-[state=active]:text-white"
  >
    Examples
  </Tabs.Trigger>
  <Tabs.Trigger
    value="mail"
    className="text-gray-400 hover:text-white text-sm px-4 py-2 rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white"
  >
    Mail
  </Tabs.Trigger>
  <Tabs.Trigger
    value="dashboard"
    className="text-gray-400 hover:text-white text-sm px-4 py-2 rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white"
  >
    Dashboard
  </Tabs.Trigger>
  <Tabs.Trigger
    value="tasks"
    className="text-gray-400 hover:text-white text-sm px-4 py-2 rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white"
  >
    Tasks
  </Tabs.Trigger>
  <Tabs.Trigger
    value="playground"
    className="text-gray-400 hover:text-white text-sm px-4 py-2 rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white"
  >
    Playground
  </Tabs.Trigger>
  <Tabs.Trigger
    value="forms"
    className="text-gray-400 hover:text-white text-sm px-4 py-2 rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white"
  >
    Forms
  </Tabs.Trigger>
  <Tabs.Trigger
    value="music"
    className="text-gray-400 hover:text-white text-sm px-4 py-2 rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white"
  >
    Music
  </Tabs.Trigger>
  <Tabs.Trigger
    value="authentication"
    className="text-gray-400 hover:text-white text-sm px-4 py-2 rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white"
  >
    Authentication
  </Tabs.Trigger>
</Tabs.List>
        

        <Box pt="3">
          <Tabs.Content value="examples">
            <Text size="2" className="text-gray-300">
              Content for Examples
            </Text>
          </Tabs.Content>
          <Tabs.Content value="mail">
            <Text size="2" className="text-gray-300">
              Content for Mail
            </Text>
          </Tabs.Content>
          <Tabs.Content value="dashboard">
            <Text size="2" className="text-gray-300">
              Content for Dashboard
            </Text>
          </Tabs.Content>
          <Tabs.Content value="tasks">
            <Text size="2" className="text-gray-300">
              Content for Tasks
            </Text>
          </Tabs.Content>
          <Tabs.Content value="playground">
            <Text size="2" className="text-gray-300">
              Content for Playground
            </Text>
          </Tabs.Content>
          <Tabs.Content value="forms">
            <Text size="2" className="text-gray-300">
              Content for Forms
            </Text>
          </Tabs.Content>
          <Tabs.Content value="music">
            <Text size="2" className="text-gray-300">
              Content for Music
            </Text>
          </Tabs.Content>
          <Tabs.Content value="authentication">
            <Text size="2" className="text-gray-300">
              Content for Authentication
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </section>
  );
};

export default HeroSection;
