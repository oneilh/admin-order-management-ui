import Avatar from "./Avatar";
import NavLinks from "./NavLinks";

const SideMenu = () => {
  return (
    <section className="min-h-screen min-w-fit py-12 px-8 flex flex-col gap-12 border-r border-gray-200">
      <div className="flex gap-4">
        <Avatar />
        <div>
          <h2 className="font-semibold text-md">Johnchukwu Adani</h2>
          <p>Manager</p>
        </div>
      </div>
      <NavLinks />
    </section>
  );
};

export default SideMenu;
