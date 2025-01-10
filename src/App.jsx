import React from 'react';
import { Flex, Text, Button, Badge, DropdownMenu } from '@radix-ui/themes';
import Overview from './Overview';


const App = () => {
  return (
    <div className="h-screen bg-[#000000]">
      
      <div className="max-w-7xl mx-auto">
        <Overview />
      </div>
    </div>



  );
};

export default App;
