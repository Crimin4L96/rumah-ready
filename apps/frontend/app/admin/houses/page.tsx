const houses = [
  {
    id: 1,
    name: "Rumah Minimalis",
    price: "Rp 850 Juta",
  },
  {
    id: 2,
    name: "Rumah Premium",
    price: "Rp 1.2 Miliar",
  },
];

export default function HousesPage() {
  return (
    <main className="p-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">
          Data Rumah
        </h1>

        <a
          href="/admin/houses/create"
          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          Tambah Rumah
        </a>
      </div>

      <div className="grid gap-5">
        {houses.map((house) => (
          <div
            key={house.id}
            className="border rounded-2xl p-5 bg-white shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {house.name}
            </h2>

            <p className="text-blue-600 font-bold">
              {house.price}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}