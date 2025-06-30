
// 📁 SmartCartAI/frontend/src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please enter email and password");
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/");
    } catch (err) {
      alert("Signup error: " + err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed up with Google!");
      navigate("/");
    } catch (err) {
      alert("Google signup error: " + err.message);
    }
  };

  return (
    <div className="h-screen flex items-start justify-center pt-[10%] bg-gradient-to-b from-blue-200 to-blue-400">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">📝 Create Your SmartCart Account</h2>

        <button
          onClick={handleGoogleSignup}
          type="button"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded shadow-md mb-6"
        >
          Sign Up with Google
        </button>

        <form onSubmit={handleSignup}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 mb-6 border rounded focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded shadow-md"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
