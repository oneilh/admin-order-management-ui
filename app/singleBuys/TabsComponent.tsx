"use client";
import { useState } from "react";
import { Tabs } from "@mantine/core";
const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState<string | null>('first');
  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="first">Active</Tabs.Tab>
        <Tabs.Tab value="second">Past</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">First panel</Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
    </Tabs>
  );
};

export default TabsComponent;
