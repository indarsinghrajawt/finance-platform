import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful ✅");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created ✅");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (<div className="min-h-screen flex justify-center items-center bg-[#020817]"> <div className="bg-[#0e1729] p-8 rounded-xl w-96 shadow-xl"> <h1 className="text-white text-3xl font-bold mb-6 text-center">
    AI Finance Login </h1>
    <input
      type="email"
      placeholder="Email"
      className="w-full p-3 rounded-lg mb-4 bg-[#111c33] text-white outline-none"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      className="w-full p-3 rounded-lg mb-4 bg-[#111c33] text-white outline-none"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button
      onClick={login}
      className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-white mb-3"
    >
      Login
    </button>

    <button
      onClick={signup}
      className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg text-white"
    >
      Sign Up
    </button>
  </div>
  </div>

);
}
