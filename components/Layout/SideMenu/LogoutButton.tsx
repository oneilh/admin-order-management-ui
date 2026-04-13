"use client";

import { useRouter } from "next/navigation";
import { removeTokens } from "@/utils/auth";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = () => {
        removeTokens();
        router.replace("/login");
    };

    return (
        <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-4 rounded-md cursor-pointer
        transition-colors hover:bg-neutral-600 text-white w-full"
        >
            <FiLogOut className="text-lg" />
            <p className="text-sm max-lg:hidden">Logout</p>
        </button>
    );
};

export default LogoutButton;
