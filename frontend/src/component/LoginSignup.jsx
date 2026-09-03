import { useState } from "react";
import api from "../api";
<<<<<<< HEAD
import { useCategory } from "../component/Cards/CategoryContext";

export default function LoginSignup({ open, mode, close, setMode }) {
  const isSignup = mode === "signup";
  const { setToken } = useCategory(); // 🔥 CONTEXT TOKEN
=======

export default function LoginSignup({ open, mode, close, setMode }) {
  const isSignup = mode === "signup";
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
<<<<<<< HEAD
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSignup) {
        // ===== SIGNUP =====
=======

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignup) {
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
        const res = await api.post("/api/user/register", {
          name,
          email,
          password: pass,
        });

        if (res.data.success) {
<<<<<<< HEAD
          setMode("login");
          setName("");
          setEmail("");
          setPass("");
=======
          // 🔥 AUTO LOGIN AFTER SIGNUP
          localStorage.setItem("token", res.data.token);

          window.dispatchEvent(new Event("authChange"));

          close(); // modal close
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
        } else {
          setError(res.data.message);
        }
      } else {
<<<<<<< HEAD
        // ===== LOGIN =====
=======
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
        const res = await api.post("/api/user/login", {
          email,
          password: pass,
        });

        if (res.data.success) {
<<<<<<< HEAD
          const token = res.data.data; // 🔥 SAME AS UPPER CODE

          localStorage.setItem("token", token);
          setToken(token); // 🔥 CONTEXT UPDATE

=======
          localStorage.setItem("token", res.data.data);
          window.dispatchEvent(new Event("authChange"));
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
          close();
        } else {
          setError(res.data.message);
        }
      }
<<<<<<< HEAD
    } catch (err) {
      setError("Server error, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
      <div className="bg-white dark:bg-[#0E1116] w-[90%] max-w-sm rounded-2xl p-6 relative shadow-xl">

        {/* CLOSE */}
        <button
          onClick={close}
          className="absolute top-3 right-4 text-xl text-gray-500"
=======
    } catch {
      setError("Server error, try again");
    }
  };


  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
      <div
        className="
          bg-white dark:bg-[#0E1116]
          w-[90%] max-w-sm
          rounded-2xl p-6
          relative shadow-xl
          transition-colors
        "
      >
        {/* CLOSE */}
        <button
          onClick={close}
          className="absolute top-3 right-4 text-xl text-gray-600 dark:text-gray-400"
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {isSignup ? "Create Account" : "Login"}
        </h2>

        {/* ERROR */}
<<<<<<< HEAD
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg border
                bg-white dark:bg-[#0E1116]
                text-gray-900 dark:text-white
                border-gray-300 dark:border-gray-600
                focus:outline-none focus:ring-2 focus:ring-orange-500"
=======
        {error && (
          <p className="text-sm text-red-500 mb-2">{error}</p>
        )}

        {/* FORM */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          {isSignup && (
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full px-3 py-2 rounded-lg border
                bg-white dark:bg-[#0E1116]
                text-gray-900 dark:text-white
                border-gray-300 dark:border-gray-600
                focus:outline-none focus:ring-2 focus:ring-orange-500
              "
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
            />
          )}

          <input
<<<<<<< HEAD
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 rounded-lg border
              bg-white dark:bg-[#0E1116]
              text-gray-900 dark:text-white
              border-gray-300 dark:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-orange-500"
=======
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full px-3 py-2 rounded-lg border
              bg-white dark:bg-[#0E1116]
              text-gray-900 dark:text-white
              border-gray-300 dark:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-orange-500
            "
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
          />

          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
<<<<<<< HEAD
            required
            className="w-full px-3 py-2 rounded-lg border
              bg-white dark:bg-[#0E1116]
              text-gray-900 dark:text-white
              border-gray-300 dark:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-orange-500"
=======
            className="
              w-full px-3 py-2 rounded-lg border
              bg-white dark:bg-[#0E1116]
              text-gray-900 dark:text-white
              border-gray-300 dark:border-gray-600
              focus:outline-none focus:ring-2 focus:ring-orange-500
            "
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
          />

          <button
            type="submit"
<<<<<<< HEAD
            disabled={loading}
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition disabled:opacity-60"
          >
            {loading
              ? "Please wait..."
              : isSignup
              ? "Sign Up"
              : "Login"}
=======
            className="
              w-full bg-orange-500 text-white
              py-2 rounded-lg font-semibold
              hover:bg-orange-600 transition
            "
          >
            {isSignup ? "Sign Up" : "Login"}
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
          </button>
        </form>

        {/* TOGGLE */}
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
<<<<<<< HEAD
          {isSignup ? "Already have an account?" : "New here?"}
          <button
            type="button"
            onClick={() => setMode(isSignup ? "login" : "signup")}
            className="text-orange-500 font-semibold ml-1"
=======
          {isSignup ? "Already have an account? " : "New here? "}
          <button
            onClick={() => setMode(isSignup ? "login" : "signup")}
            className="text-orange-500 font-semibold"
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
          >
            {isSignup ? "Login" : "Create account"}
          </button>
        </p>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
