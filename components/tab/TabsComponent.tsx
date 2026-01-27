"use client";

import { Tabs } from "@mantine/core";
import { useState } from "react";

export type PageNameprop = {
  children: React.ReactNode;
};

const TabsComponent = ({ children }: PageNameprop) => {
  const [activeTab, setActiveTab] = useState<string | null>("first");
  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="first">All</Tabs.Tab>
        <Tabs.Tab value="second">Active Orders</Tabs.Tab>
        <Tabs.Tab value="third">Past Orders</Tabs.Tab>
      </Tabs.List>
      {children}
    </Tabs>
  );
};

export default TabsComponent;
