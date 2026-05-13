// "use client";

// import { useEffect, useState } from "react";
// import { api } from "@/services/api";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// export default function Home() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");

//   const [products, setProducts] =
//     useState<Product[]>([]);

//   //
//   // GET PRODUCTS
//   //
//   const getProducts = async () => {
//     try {
//       const res = await api.get(
//         "/api/products"
//       );

//       console.log(res.data);

//       setProducts(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   //
//   // CREATE PRODUCT
//   //
//   const createProduct = async () => {
//     try {
//       const res = await api.post(
//         "/api/products",
//         {
//           name,
//           price: Number(price),
//         }
//       );

//       console.log(res.data);

//       //
//       // refresh data
//       //
//       getProducts();

//       //
//       // reset form
//       //
//       setName("");
//       setPrice("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   //
//   // FIRST LOAD
//   //
//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div className="p-10 space-y-6">
//       <div className="text-5xl font-bold text-red-500">
//         Tailwind Works
//       </div>

//       <div className="space-y-2">
//         <input
//           className="border p-2 rounded"
//           placeholder="Product name"
//           value={name}
//           onChange={(e) =>
//             setName(e.target.value)
//           }
//         />

//         <input
//           className="border p-2 rounded"
//           placeholder="Price"
//           value={price}
//           onChange={(e) =>
//             setPrice(e.target.value)
//           }
//         />

//         <button
//           className="bg-black text-white px-4 py-2 rounded"
//           onClick={createProduct}
//         >
//           Create Product
//         </button>
//       </div>

//       <div className="space-y-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-lg p-4"
//           >
//             <div>
//               {product.name}
//             </div>

//             <div>
//               Rp {product.price}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedHouses from "@/components/FeaturedHouses";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FeaturedHouses />
      <Footer />
    </main>
  );
}