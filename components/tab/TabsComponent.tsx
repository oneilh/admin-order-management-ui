"use client";

import { Tabs } from "@mantine/core";
import { useState } from "react";
import TabPanelComponent from "./TabPanelComponent";

export type PageNameprop= {
  isGroupBuy?: boolean;
}

const TabsComponent = ({ isGroupBuy = false }: PageNameprop) => {
  const [activeTab, setActiveTab] = useState<string | null>("first");
  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="first">All</Tabs.Tab>
        <Tabs.Tab value="second">Active Orders</Tabs.Tab>
        <Tabs.Tab value="third">Past Orders</Tabs.Tab>
      </Tabs.List>

      <TabPanelComponent isGroupBuy={isGroupBuy}/>
    </Tabs>
  );
};

export default TabsComponent;
