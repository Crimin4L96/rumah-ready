import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 px-8 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Temukan Rumah Impian Anda
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Kami menyediakan berbagai pilihan rumah modern,
            nyaman, dan strategis untuk keluarga Anda.
          </p>

          <Link
            href="/catalog"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Lihat Katalog Rumah
          </Link>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop"
            alt="House"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}