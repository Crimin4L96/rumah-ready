const houses = [
  {
    id: 1,
    name: "Rumah Minimalis Modern",
    price: "Rp 850 Juta",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Rumah Family Premium",
    price: "Rp 1.2 Miliar",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Rumah Cluster Elite",
    price: "Rp 950 Juta",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Rumah Cluster Elite",
    price: "Rp 950 Juta",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Rumah Cluster Elite",
    price: "Rp 950 Juta",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeaturedHouses() {
  return (
    <section
      id="catalog"
      className="bg-gray-100 py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Rumah Unggulan
        </h2>
{/*  */}
        <div className="grid md:grid-cols-3 gap-8">
          {houses.map((house) => (
            <div
              key={house.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={house.image}
                alt={house.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {house.name}
                </h3>

                <p className="text-blue-600 font-bold mb-4">
                  {house.price}
                </p>

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
                  Detail Rumah
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}