import SideMenu from "@/components/Layout/SideMenu/SideMenu";
import AuthGuard from "./AuthGuard";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
		<AuthGuard>
			<div className="flex h-screen overflow-clip">
				<SideMenu />
				<div className="grow p-8 overflow-auto">{children}</div>
			</div>
		</AuthGuard>
    );
}
