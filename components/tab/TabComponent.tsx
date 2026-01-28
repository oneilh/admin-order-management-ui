"use client";

import { useState } from "react";
import { Tabs } from "@mantine/core";
import { GroupBuyType } from "@/Types/groupOrderBuy";
import { TableColumnType } from "@/Types/tableColumnType";
import Table from "../Layout/table/Table";
import TableRows from "../Layout/table/TableRows";
import GroupBuyRows from "@/app/groupBuys/GroupBuyRows";

type TabComponentProps = {
  products?: GroupBuyType[];
  activeData?: any[];
  pastData?: any[];
  col?: TableColumnType[];
};

const TabComponent = ({ activeData, pastData, col }: TabComponentProps) => {
  const [filteredProducts, setFilteredProducts] = useState<any[]>(
    activeData || [],
  );

  const tabValues = ["first", "second", "third"];

  const handleTabChange = (value: string | null) => {
    if (!value) return;

    if (value === "second") {
      setFilteredProducts(pastData || []);
    }
    setFilteredProducts(activeData || []);
  };

  return (
    <Tabs defaultValue="first" onChange={handleTabChange}>
      <Tabs.List>
        <Tabs.Tab value="first">Active Orders</Tabs.Tab>
        <Tabs.Tab value="second">Past Orders</Tabs.Tab>
      </Tabs.List>

      {tabValues.map((value) => (
        <Tabs.Panel value={value} key={value}>
          <div className="my-6 p-4 border border-dashed border-gray-300 shadow-md rounded-xl">
            <Table columns={col || []}>
              <TableRows data={filteredProducts} />
              <GroupBuyRows data={filteredProducts} />
            </Table>
          </div>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default TabComponent;
