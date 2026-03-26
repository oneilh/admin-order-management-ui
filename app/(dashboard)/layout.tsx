import SideMenu from "@/components/Layout/SideMenu/SideMenu";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-clip">
            <SideMenu />
            <div className="grow p-8 overflow-auto">{children}</div>
        </div>
    );
}
