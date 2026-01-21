import Link from "./Link";

import { FaBagShopping } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

const NavLinks = () => {
  return (
    <nav className="flex flex-col gap-4">
      <Link
        iconComponent={<FaBagShopping className="text-xl" />}
        href="Single Buys"
        active={true}
      />
      <Link
        iconComponent={<FaUserGroup className="text-xl" />}
        href="Group Buys"
      />
      <Link
        iconComponent={<IoSettingsSharp className="text-xl" />}
        href="Settings"
      />
    </nav>
  );
};

export default NavLinks;
