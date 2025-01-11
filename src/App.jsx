import React from 'react';
import { Flex, Text, Button, Badge, DropdownMenu } from '@radix-ui/themes';
import Overview from './Overview';
import Menu from "./components/Menu";
import Chart from "./components/Chart";
import HeroSection from "./components/HeroSection";
import Dashboard from "./components/Dashboard"; 


const App = () => {
  return (
    <div className="h-full w-full bg-[#000000]">
      
      <div className="max-w-7xl mx-auto">
        <Menu />
              <HeroSection />
              <Dashboard />
              {/* <Chart />*/}
      </div>
    </div>



  );
};

export default App;
