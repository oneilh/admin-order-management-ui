"use client";

import { setTokens, BASE_URL } from "@/utils/auth";
import { useState } from "react";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true); // after submitting, disable button, show loading
        setError(""); // clear any previous console.error

        try {
            const response = await fetch(`${BASE_URL}/sub-admin/v1/login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // telling API we're sending JSON
                },
                body: JSON.stringify({ email, password }), // converting JS object to JSON string
            });

            const data = await response.json(); // parse JSON response into JS object

            if (!response.ok) {
                // API returned an error? (wrong password, etc)...
                setError(
                    data.message || "Login failed. Check your credentials.",
                );
                return;
            }

            // Success?, save both tokens
            setTokens(data.access, data.refresh);

            // Redirect
            window.location.href = "/single_buys";
        } catch (_err) {
            setError("An error occurred during login. Please try again.");
        } finally {
            setLoading(false); // re-enable button, hide loading
        }
    };
    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="flex items-center">
                <label htmlFor="email" className="text-green-950">
                    Email:
                </label>
                <input
                    id="email"
                    type="text"
                    className="text-amber-200 border-2 border-gray-300 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="flex items-center">
                <label htmlFor="password" className="text-green-950">
                    Password:
                </label>
                <input
                    id="password"
                    type="password"
                    className="text-amber-200 border-2 border-gray-300 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex items-center justify-center">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </div>
        </form>
    );
}
