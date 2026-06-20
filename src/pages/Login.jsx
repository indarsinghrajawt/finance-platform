import { useState } from "react";
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            localStorage.setItem(
                "loginTime",
                Date.now().toString()
            );

            navigate("/dashboard");
        } catch (error) {
            let message = "Login failed";

            switch (error.code) {
                case "auth/invalid-credential":
                    message = "Invalid email or password";
                    break;

                case "auth/user-not-found":
                    message = "Account not found. Please sign up first.";
                    break;

                case "auth/wrong-password":
                    message = "Incorrect password";
                    break;

                case "auth/invalid-email":
                    message = "Invalid email address";
                    break;

                case "auth/too-many-requests":
                    message = "Too many attempts. Try again later.";
                    break;

                default:
                    message = "Unable to login. Please try again.";
            }

            alert(message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();

            await signInWithPopup(
                auth,
                provider
            );

            localStorage.setItem(
                "loginTime",
                Date.now().toString()
            );

            navigate("/dashboard");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen flex">

            {/* Left Side */}
            <div
                className="hidden lg:flex w-1/2 bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1642543348745-6b6f8e4c4e90?q=80&w=2000')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 flex flex-col justify-center px-12 text-white">

                    <h1 className="text-6xl font-bold">
                        Financial
                    </h1>

                    <h1 className="text-6xl font-bold text-indigo-400">
                        Intelligence
                    </h1>

                    <p className="mt-6 text-xl text-slate-200">
                        Real-Time Market Insights,
                        AI Predictions &
                        Portfolio Analytics.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-10">

                        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                            <h3 className="text-3xl font-bold">

                            </h3>
                            <p>Users</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                            <h3 className="text-3xl font-bold">

                            </h3>
                            <p>Predictions</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                            <h3 className="text-3xl font-bold">

                            </h3>
                            <p>Markets</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                            <h3 className="text-3xl font-bold">

                            </h3>
                            <p>Uptime</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 bg-[#020817] flex items-center justify-center p-8">

                <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

                    <h2 className="text-white text-4xl font-bold mb-2">
                        Welcome Back 👋
                    </h2>

                    <p className="text-slate-400 mb-8">
                        Sign in to your account
                    </p>

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className="w-full p-4 mb-4 rounded-xl bg-[#0e1729] border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="w-full p-4 mb-4 rounded-xl bg-[#0e1729] border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
                    />

                    <button
                        onClick={handleLogin}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 p-4 rounded-xl text-white font-semibold transition-all"
                    >
                        Login
                    </button>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full mt-4 bg-white text-black p-4 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                    >
                        Continue with Google
                    </button>

                    <p className="text-center text-slate-400 mt-6">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-indigo-400 hover:text-indigo-300"
                        >
                            Sign Up
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
}