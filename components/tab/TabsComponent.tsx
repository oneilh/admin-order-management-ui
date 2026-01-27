"use client";

import { Tabs } from "@mantine/core";
import { useState } from "react";
import TabPanelComponent from "./TabPanelComponent";

export type PageNameprop= {
  isGroupBuy?: boolean;
  children?: React.ReactNode;
}

const TabsComponent = ({ isGroupBuy = false, children}: PageNameprop) => {
  const [activeTab, setActiveTab] = useState<string | null>("first");
  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="first">All</Tabs.Tab>
        <Tabs.Tab value="second">Active Orders</Tabs.Tab>
        <Tabs.Tab value="third">Past Orders</Tabs.Tab>
      </Tabs.List>

      {/* <TabPanelComponent isGroupBuy={isGroupBuy}/> */}
      {/* remove below later */}
      {children}
    </Tabs>
  );
};

export default TabsComponent;
