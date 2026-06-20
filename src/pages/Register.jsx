import { useState } from "react";
import {
    createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {
        setErrorMessage("");

try {
  await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  alert("Account Created Successfully");
  navigate("/");

} catch (error) {
  switch (error.code) {
    case "auth/email-already-in-use":
      setErrorMessage(
        "This email is already registered"
      );
      break;

    case "auth/weak-password":
      setErrorMessage(
        "Password must be at least 6 characters"
      );
      break;

    case "auth/invalid-email":
      setErrorMessage(
        "Please enter a valid email address"
      );
      break;

    default:
      setErrorMessage(
        "Unable to create account. Please try again."
      );
  }
}

    };

    return (<div className="min-h-screen bg-[#020817] flex items-center justify-center">

        <div className="bg-[#0e1729] p-10 rounded-3xl w-[450px] shadow-2xl">

            <h1 className="text-white text-4xl font-bold mb-2">
                Create Account 🚀
            </h1>

            <p className="text-slate-400 mb-8">
                Join Financial Intelligence Platform
            </p>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                className="w-full p-4 mb-4 rounded-xl bg-[#020817] border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                className="w-full p-4 rounded-xl bg-[#020817] border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
                onChange={(e) => setPassword(e.target.value)}
            />

            {errorMessage && (
                <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-xl mt-4 text-sm">
                    {errorMessage}
                </div>
            )}

            <button
                onClick={handleRegister}
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 p-4 rounded-xl text-white font-semibold transition-all"
            >
                Create Account
            </button>

            <p className="text-slate-400 mt-6 text-center">
                Already have an account?{" "}
                <Link
                    to="/"
                    className="text-indigo-400 hover:text-indigo-300"
                >
                    Login
                </Link>
            </p>

        </div>

    </div>

);
}
