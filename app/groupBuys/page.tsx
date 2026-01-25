import TabsComponent from "@/components/tab/TabsComponent"
import TitleHeader from "@/components/TitleHeader"
import { title } from "process"
const pageInfo = {
title: "Group Buys",
description: "Manage group purchase orders"
}
const page = () => {
  return (
     <section className="flex flex-col gap-4">
      <TitleHeader title={pageInfo.title} desc={pageInfo.description}/>
      <TabsComponent isGroupBuy={true}/>
    </section>
  )
}

export default page
