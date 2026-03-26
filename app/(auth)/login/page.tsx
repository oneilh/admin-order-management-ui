"use client";

import { useState } from "react";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	const handleSubmit =(e: React.FormEvent) => {
		e.preventDefault()
		console.log(email, password)
	}
    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="flex items-center">
                <label htmlFor="email" className="text-blue-50">
                    Email:
                </label>
                <input id="email" type="text" className="text-amber-200" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex items-center">
                <label htmlFor="password" className="text-blue-50">
                    Password:
                </label>
                <input id="password" type="password" className="text-amber-200" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
			<div className="flex items-center justify-center">
				<button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
					Login
				</button>
			</div>
        </form>
    );
}
