import Avatar from "./Avatar";
import NavLinks from "./NavLinks";

const SideMenu = () => {
  return (
    <section className="p-2 flex flex-col items-center justify-between bg-neutral-900 text-white">
      <div className="p-2 flex flex-col gap-12 bg-neutral-900 text-white h-screen">
        <h2>Grup</h2>
        <NavLinks />
      </div>
    </section>
  );
};

export default SideMenu;
