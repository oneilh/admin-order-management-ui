import NavLinks from "./NavLinks";
import LogoutButton from "./LogoutButton";

const SideMenu = () => {
    return (
        <section className="p-2 flex flex-col items-center justify-between bg-neutral-900 text-white h-screen ">
            <div className="p-2 flex flex-col gap-12 bg-neutral-900 text-white">
                <h2>Grup</h2>
                <NavLinks />
            </div>
            <div className="p-2">
                <LogoutButton />
            </div>
        </section>
    );
};

export default SideMenu;
