import React from 'react';
import { Flex, Text, Button, Badge, DropdownMenu } from '@radix-ui/themes';
import Overview from './Overview';
import Menu from "./components/Menu";
import Chart from "./components/Chart";
import HeroSection from "./components/HeroSection";
import Dashboard from "./components/Dashboard"; 
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="h-full w-full bg-[#000000]">
      
      <div className="">
        <Menu />
              <HeroSection />
              <Overview />
              {/* <Chart />*/}
              <Footer />
      </div>
    </div>



  );
};

export default App;
