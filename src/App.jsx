



// // 📁 SmartCartAI/frontend/src/App.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import "./index.css";

// const products = [
//   { id: 1, title: "iPhone 14", img: "https://th.bing.com/th/id/OIP.h27knWQSijv658bGkjccSgHaF6?w=231&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 2, title: "JBL Earphones", img: "https://th.bing.com/th/id/OIP.LqK5ENA2nIyMTeQyi11DxQHaHa?w=153&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 3, title: "Power Bank", img: "https://th.bing.com/th/id/OIP.RvrVVgm5vRSOgGT9stzLeAHaGk?w=203&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 4, title: "iPhone Case", img: "https://th.bing.com/th/id/OIP.P1EUAcei-1f_q7hgZ2XDTwHaJL?w=142&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 5, title: "Boat Smartwatch", img: "https://th.bing.com/th/id/OIP.bPjE3IvBwrujueTJPYT9zAHaEK?w=335&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 6, title: "Galaxy S22", img: "https://th.bing.com/th/id/OIP.PwwP87l4h4_xl6yIEOJvZgHaFj?w=250&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
// ];

// function App() {
//   const [search, setSearch] = useState("");
//   const [filtered, setFiltered] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = (e) => {
//     const val = e.target.value;
//     setSearch(val);
//     if (val.trim() === "") {
//       setFiltered([]);
//     } else {
//       const matches = products.filter((p) =>
//         p.title.toLowerCase().includes(val.toLowerCase())
//       );
//       setFiltered(matches);
//     }
//   };

//   const selectProduct = (id) => {
//     if (!cart.includes(id)) {
//       setCart((prev) => [...prev, id]);
//     }
//     setSearch("");
//     setFiltered([]);
//   };

//   const toggleProduct = (id) => {
//     setCart((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };

//   const fetchRecommendations = async () => {
//     setLoading(true);
//     const query = cart.join(",");
//     const res = await axios.get(`http://localhost:5000/recommend?cart=${query}`);
//     setRecommendations(res.data);
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
//         <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700">
//           🛒 SmartCart AI
//         </h1>

//         <div className="mb-6">
//           <input
//             type="text"
//             value={search}
//             onChange={handleSearch}
//             placeholder="Search for a product..."
//             className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//           />
//           {filtered.length > 0 && (
//             <div className="bg-white border rounded shadow mt-2 max-h-60 overflow-y-auto">
//               {filtered.map((p) => (
//                 <div
//                   key={p.id}
//                   onClick={() => selectProduct(p.id)}
//                   className="cursor-pointer px-4 py-2 hover:bg-blue-100"
//                 >
//                   {p.title}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Selected Products:</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
//           {products.filter((p) => cart.includes(p.id)).map((p) => (
//             <div
//               key={p.id}
//               onClick={() => toggleProduct(p.id)}
//               className="cursor-pointer border-2 border-green-500 bg-green-50 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all duration-200"
//             >
//               <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
//               <p className="text-center py-2 font-medium text-gray-700">{p.title}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <button
//             onClick={fetchRecommendations}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg text-lg"
//           >
//             Get Recommendations
//           </button>
//         </div>

//         {loading && (
//           <p className="text-center text-gray-600 mt-6 animate-pulse text-lg">⏳ Fetching recommendations...</p>
//         )}

//         {!loading && recommendations.length > 0 && (
//           <div className="mt-10">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
//               📢 Recommended For You:
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {recommendations.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="p-4 border rounded-xl shadow-md bg-yellow-50 hover:bg-yellow-100"
//                 >
//                   <p className="font-semibold text-lg">{item.title}</p>
//                   <p className="text-sm text-gray-600">Score: {item.score.toFixed(2)}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;






// // 📁 SmartCartAI/frontend/src/App.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import "./index.css";

// const products = [
//   { id: 1, title: "iPhone 14", img: "https://th.bing.com/th/id/OIP.h27knWQSijv658bGkjccSgHaF6?w=231&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 2, title: "JBL Earphones", img: "https://th.bing.com/th/id/OIP.LqK5ENA2nIyMTeQyi11DxQHaHa?w=153&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 3, title: "Power Bank", img: "https://th.bing.com/th/id/OIP.RvrVVgm5vRSOgGT9stzLeAHaGk?w=203&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 4, title: "iPhone Case", img: "https://th.bing.com/th/id/OIP.P1EUAcei-1f_q7hgZ2XDTwHaJL?w=142&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 5, title: "Boat Smartwatch", img: "https://th.bing.com/th/id/OIP.bPjE3IvBwrujueTJPYT9zAHaEK?w=335&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 6, title: "Galaxy S22", img: "https://th.bing.com/th/id/OIP.PwwP87l4h4_xl6yIEOJvZgHaFj?w=250&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
// ];

// function App() {
//   const [search, setSearch] = useState("");
//   const [filtered, setFiltered] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");

//   const handleSearch = (e) => {
//     const val = e.target.value;
//     setSearch(val);
//     if (val.trim() === "") {
//       setFiltered([]);
//     } else {
//       const matches = products.filter((p) =>
//         p.title.toLowerCase().includes(val.toLowerCase())
//       );
//       setFiltered(matches);
//     }
//   };

//   const selectProduct = (id) => {
//     if (!cart.includes(id)) {
//       setCart((prev) => [...prev, id]);
//     }
//     setSearch("");
//     setFiltered([]);
//   };

//   const toggleProduct = (id) => {
//     setCart((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };

//   const fetchRecommendations = async () => {
//     setLoading(true);
//     const query = cart.join(",");
//     const res = await axios.get(`http://localhost:5000/recommend?cart=${query}`);
//     setRecommendations(res.data);
//     setLoading(false);
//   };

//   if (!loggedIn) {
//     return (
//       <div className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200">
//         <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">🔐 Login</h2>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your name"
//             className="w-full px-4 py-2 text-lg border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300 mb-4"
//           />
//           <button
//             onClick={() => setLoggedIn(true)}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-lg shadow-md"
//           >
//             Enter SmartCart
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
//         <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700">
//           🛒 SmartCart AI
//         </h1>

//         <div className="mb-6">
//           <input
//             type="text"
//             value={search}
//             onChange={handleSearch}
//             placeholder="Search for a product..."
//             className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//           />
//           {filtered.length > 0 && (
//             <div className="bg-white border rounded shadow mt-2 max-h-60 overflow-y-auto">
//               {filtered.map((p) => (
//                 <div
//                   key={p.id}
//                   onClick={() => selectProduct(p.id)}
//                   className="cursor-pointer px-4 py-2 hover:bg-blue-100"
//                 >
//                   {p.title}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Selected Products:</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
//           {products.filter((p) => cart.includes(p.id)).map((p) => (
//             <div
//               key={p.id}
//               onClick={() => toggleProduct(p.id)}
//               className="cursor-pointer border-2 border-green-500 bg-green-50 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all duration-200"
//             >
//               <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
//               <p className="text-center py-2 font-medium text-gray-700">{p.title}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <button
//             onClick={fetchRecommendations}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg text-lg"
//           >
//             Get Recommendations
//           </button>
//         </div>

//         {loading && (
//           <p className="text-center text-gray-600 mt-6 animate-pulse text-lg">⏳ Fetching recommendations...</p>
//         )}

//         {!loading && recommendations.length > 0 && (
//           <div className="mt-10">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
//               📢 Recommended For You:
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {recommendations.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="p-4 border rounded-xl shadow-md bg-yellow-50 hover:bg-yellow-100"
//                 >
//                   <p className="font-semibold text-lg">{item.title}</p>
//                   <p className="text-sm text-gray-600">Score: {item.score.toFixed(2)}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;







// // 📁 SmartCartAI/frontend/src/App.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import "./index.css";

// const products = [
//   { id: 1, title: "iPhone 14", img: "https://th.bing.com/th/id/OIP.h27knWQSijv658bGkjccSgHaF6?w=231&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 2, title: "JBL Earphones", img: "https://th.bing.com/th/id/OIP.LqK5ENA2nIyMTeQyi11DxQHaHa?w=153&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 3, title: "Power Bank", img: "https://th.bing.com/th/id/OIP.RvrVVgm5vRSOgGT9stzLeAHaGk?w=203&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 4, title: "iPhone Case", img: "https://th.bing.com/th/id/OIP.P1EUAcei-1f_q7hgZ2XDTwHaJL?w=142&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 5, title: "Boat Smartwatch", img: "https://th.bing.com/th/id/OIP.bPjE3IvBwrujueTJPYT9zAHaEK?w=335&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
//   { id: 6, title: "Galaxy S22", img: "https://th.bing.com/th/id/OIP.PwwP87l4h4_xl6yIEOJvZgHaFj?w=250&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
// ];

// function App() {
//   const [search, setSearch] = useState("");
//   const [filtered, setFiltered] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (!userData) {
//       window.location.href = "/login";
//     } else {
//       setUser(userData);
//     }
//   }, []);

//   const handleSearch = (e) => {
//     const val = e.target.value;
//     setSearch(val);
//     if (val.trim() === "") {
//       setFiltered([]);
//     } else {
//       const matches = products.filter((p) =>
//         p.title.toLowerCase().includes(val.toLowerCase())
//       );
//       setFiltered(matches);
//     }
//   };

//   const selectProduct = (id) => {
//     if (!cart.includes(id)) {
//       setCart((prev) => [...prev, id]);
//     }
//     setSearch("");
//     setFiltered([]);
//   };

//   const toggleProduct = (id) => {
//     setCart((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };

//   const fetchRecommendations = async () => {
//     setLoading(true);
//     const query = cart.join(",");
//     const res = await axios.get(`http://localhost:5000/recommend?cart=${query}`);
//     setRecommendations(res.data);
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 relative">
//         <button
//           onClick={() => {
//             localStorage.removeItem("user");
//             window.location.href = "/login";
//           }}
//           className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded shadow hover:bg-red-600"
//         >
//           Logout
//         </button>

//         <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700">
//           🛒 SmartCart AI
//         </h1>

//         <div className="mb-6">
//           <input
//             type="text"
//             value={search}
//             onChange={handleSearch}
//             placeholder="Search for a product..."
//             className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//           />
//           {filtered.length > 0 && (
//             <div className="bg-white border rounded shadow mt-2 max-h-60 overflow-y-auto">
//               {filtered.map((p) => (
//                 <div
//                   key={p.id}
//                   onClick={() => selectProduct(p.id)}
//                   className="cursor-pointer px-4 py-2 hover:bg-blue-100"
//                 >
//                   {p.title}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Selected Products:</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
//           {products.filter((p) => cart.includes(p.id)).map((p) => (
//             <div
//               key={p.id}
//               onClick={() => toggleProduct(p.id)}
//               className="cursor-pointer border-2 border-green-500 bg-green-50 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all duration-200"
//             >
//               <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
//               <p className="text-center py-2 font-medium text-gray-700">{p.title}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <button
//             onClick={fetchRecommendations}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg text-lg"
//           >
//             Get Recommendations
//           </button>
//         </div>

//         {loading && (
//           <p className="text-center text-gray-600 mt-6 animate-pulse text-lg">⏳ Fetching recommendations...</p>
//         )}

//         {!loading && recommendations.length > 0 && (
//           <div className="mt-10">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
//               📢 Recommended For You:
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {recommendations.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="p-4 border rounded-xl shadow-md bg-yellow-50 hover:bg-yellow-100"
//                 >
//                   <p className="font-semibold text-lg">{item.title}</p>
//                   <p className="text-sm text-gray-600">Score: {item.score.toFixed(2)}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;







// 📁 SmartCartAI/frontend/src/App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./index.css";

const products = [
  { id: 1, title: "iPhone 14", img: "https://th.bing.com/th/id/OIP.h27knWQSijv658bGkjccSgHaF6?w=231&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 2, title: "JBL Earphones", img: "https://th.bing.com/th/id/OIP.LqK5ENA2nIyMTeQyi11DxQHaHa?w=153&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 3, title: "Power Bank", img: "https://th.bing.com/th/id/OIP.RvrVVgm5vRSOgGT9stzLeAHaGk?w=203&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 4, title: "iPhone Case", img: "https://th.bing.com/th/id/OIP.P1EUAcei-1f_q7hgZ2XDTwHaJL?w=142&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 5, title: "Boat Smartwatch", img: "https://th.bing.com/th/id/OIP.bPjE3IvBwrujueTJPYT9zAHaEK?w=335&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
  { id: 6, title: "Galaxy S22", img: "https://th.bing.com/th/id/OIP.PwwP87l4h4_xl6yIEOJvZgHaFj?w=250&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
];

function App() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [cart, setCart] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
    if (val.trim() === "") {
      setFiltered([]);
    } else {
      const matches = products.filter((p) =>
        p.title.toLowerCase().includes(val.toLowerCase())
      );
      setFiltered(matches);
    }
  };

  const selectProduct = (id) => {
    if (!cart.includes(id)) {
      setCart((prev) => [...prev, id]);
    }
    setSearch("");
    setFiltered([]);
  };

  const toggleProduct = (id) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const fetchRecommendations = async () => {
    setLoading(true);
    const query = cart.join(",");
    const res = await axios.get(`https://smartcartai-2.onrender.com/recommend?cart=${query}`);
    setRecommendations(res.data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 relative">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded shadow hover:bg-red-600"
        >
          Logout
        </button>

        <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700">
          🛒 SmartCart AI
        </h1>

        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search for a product..."
            className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
          {filtered.length > 0 && (
            <div className="bg-white border rounded shadow mt-2 max-h-60 overflow-y-auto">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  onClick={() => selectProduct(p.id)}
                  className="cursor-pointer px-4 py-2 hover:bg-blue-100"
                >
                  {p.title}
                </div>
              ))}
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">Selected Products:</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {products.filter((p) => cart.includes(p.id)).map((p) => (
            <div
              key={p.id}
              onClick={() => toggleProduct(p.id)}
              className="cursor-pointer border-2 border-green-500 bg-green-50 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all duration-200"
            >
              <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
              <p className="text-center py-2 font-medium text-gray-700">{p.title}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={fetchRecommendations}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg text-lg"
          >
            Get Recommendations
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-600 mt-6 animate-pulse text-lg">
            ⏳ Fetching recommendations...
          </p>
        )}

        {!loading && recommendations.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
              📢 Recommended For You:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 border rounded-xl shadow-md bg-yellow-50 hover:bg-yellow-100"
                >
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-sm text-gray-600">Score: {item.score.toFixed(2)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
