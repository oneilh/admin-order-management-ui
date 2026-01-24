"use client";

import { Tabs } from "@mantine/core";
import { useState } from "react";
import TabPanel from "./TabPanel";

const TabsComponent = ({ route }: { route?: string }) => {
  const [activeTab, setActiveTab] = useState<string | null>("first");
  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="first">All</Tabs.Tab>
        <Tabs.Tab value="second">Active Orders</Tabs.Tab>
        <Tabs.Tab value="third">Past Orders</Tabs.Tab>
      </Tabs.List>

      <TabPanel route={route}/>
    </Tabs>
  );
};

export default TabsComponent;
