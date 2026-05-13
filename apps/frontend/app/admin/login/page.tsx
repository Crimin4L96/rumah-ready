"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const data = await response.json();
    console.log(data,'response')

    localStorage.setItem(
      "token",
      data.token
    );

    router.push("/admin/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Admin Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-3"
              placeholder="admin@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-3"
              placeholder="********"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}