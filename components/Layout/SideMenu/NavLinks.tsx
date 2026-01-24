"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBagShopping, FaUserGroup } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import Avatar from "./Avatar";

const NavLinks = () => {
  const routes = [
    {
      name: "Single Buys",
      icon: <FaBagShopping className="text-lg" />,
      route: "/singleBuys",
    },
    {
      name: "Group Buys",
      icon: <FaUserGroup className="text-lg" />,
      route: "/groupBuys",
    },
    {
      name: "Settings",
      icon: <IoSettingsSharp className="text-lg" />,
      route: "/",
    },
  ];

  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-4">
      {routes.map((route) => {
        return (
          <Link href={route.route} key={route.name}>
            <div
              className={`
              flex items-center gap-3 px-4 py-4 rounded-md cursor-pointer
              transition-colors
              hover:bg-neutral-600 text-white
             max-lg:justify-center
             ${pathname === route.route ? "bg-neutral-800" : ""}
            `}
            >
              {route.icon}
              <p className="text-sm max-lg:hidden">{route.name}</p>
            </div>
          </Link>
        );
      })}

      {/* <Avatar/> */}
    </nav>
  );
};

export default NavLinks;

//  ${
//                 route.active
//                   ? "bg-red-600 text-white"
//                   : "bg-red-500 hover:bg-red-600 text-white"
//               }
