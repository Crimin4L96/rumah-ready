"use client";

import { useState } from "react";

export default function CreateHousePage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log({
      name,
      price,
      location,
    });

    // TODO:
    // connect API backend
  };

  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Tambah Rumah
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-2xl shadow-md"
      >
        <div>
          <label className="block mb-2 font-medium">
            Nama Rumah
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Harga
          </label>

          <input
            type="text"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Lokasi
          </label>

          <input
            type="text"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
            className="w-full border rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Upload Gambar
          </label>

          <input type="file" />
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
          Simpan Rumah
        </button>
      </form>
    </main>
    );
}