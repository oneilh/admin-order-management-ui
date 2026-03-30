// This component is a placeholder for an authentication guard. It will check if the user
// is authenticated and redirect to the login page if not.
// The actual authentication logic will be implemented in the useEffect hook.

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        // This runs in the browser where localStorage exists
        if (!isAuthenticated()) {
            router.replace("/login");
        }
    }, [router]);

    return <>{children}</>;
}
