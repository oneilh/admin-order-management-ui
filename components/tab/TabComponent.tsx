"use client";

import { Tabs } from "@mantine/core";
import { GroupBuyType } from "@/Types/groupOrderBuy";
import { TableColumnType } from "@/Types/tableColumnType";
import { useState } from "react";
import Table from "../Layout/table/Table";
import TableRows from "../Layout/table/TableRows";

const TabComponent = ({
  products,
  col,
}: {
  products: any[];
  col: TableColumnType[];
}) => {
  const [filteredProducts, setFilteredProducts] =
    useState<GroupBuyType[]>(products);

  const tabValues = ["first", "second", "third"];

  const handleTabChange = (value: string | null) => {
    if (!value) return;

    if (value === "second") {
      setFilteredProducts(products.filter((item) => item.status === "Active"));
    } else if (value === "third") {
      setFilteredProducts(products.filter((item) => item.status !== "Active"));
    } else {
      setFilteredProducts(products); // "first"
    }
  };

  return (
    <Tabs defaultValue="first" onChange={handleTabChange}>
      <Tabs.List>
        <Tabs.Tab value="first">All</Tabs.Tab>
        <Tabs.Tab value="second">Active</Tabs.Tab>
        <Tabs.Tab value="third">Past</Tabs.Tab>
      </Tabs.List>

      {tabValues.map((value) => (
        <Tabs.Panel value={value} key={value}>
          <div className="my-6 p-4 border border-dashed border-gray-300 shadow-md rounded-xl">
            <Table columns={col}>
              <TableRows data={filteredProducts} />
            </Table>
          </div>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default TabComponent;
