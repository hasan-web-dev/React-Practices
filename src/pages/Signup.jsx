import { useState } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/config.js';

const auth = getAuth(app);

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupHandler = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                console.log("user", user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage);
                // ..
            });
    }

    return (
        <div className="min-h-screen bg-slate-950 px-4 py-8 sm:px-6">
            <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
                <div className="w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid lg:grid-cols-2">

                    {/* ================= LEFT SIDE ================= */}
                    <div className="relative hidden overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-10 text-white lg:flex lg:min-h-[720px]">

                        {/* Decorative Circles */}
                        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10" />
                        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-white/10" />
                        <div className="absolute right-20 top-1/2 h-32 w-32 rounded-full bg-white/5" />

                        <div className="relative z-10 flex w-full flex-col justify-between">

                            {/* Logo */}
                            <div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-xl font-bold shadow-lg backdrop-blur">
                                    A
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="my-auto max-w-lg py-16">

                                <span className="mb-5 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
                                    ✨ Start your journey
                                </span>

                                <h1 className="text-4xl font-bold leading-tight xl:text-5xl">
                                    Create your account and get started.
                                </h1>

                                <p className="mt-6 max-w-md text-base leading-7 text-white/80">
                                    Join our community and unlock a simple, secure and
                                    personalized experience designed just for you.
                                </p>

                                {/* Features */}
                                <div className="mt-8 space-y-4">

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                                            ✓
                                        </div>
                                        <span className="text-sm text-white/90">
                                            Simple and easy to use
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                                            ✓
                                        </div>
                                        <span className="text-sm text-white/90">
                                            Secure account experience
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                                            ✓
                                        </div>
                                        <span className="text-sm text-white/90">
                                            Access your account anywhere
                                        </span>
                                    </div>

                                </div>
                            </div>

                            {/* Bottom Text */}
                            <p className="text-sm text-white/60">
                                Secure. Simple. Beautiful.
                            </p>

                        </div>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="p-6 sm:p-10 lg:p-12">

                        {/* Header */}
                        <div className="mb-8">
                            <p className="mb-2 text-sm font-semibold text-indigo-600">
                                CREATE ACCOUNT
                            </p>

                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                Get started today
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Create your account by filling in the details below.
                            </p>
                        </div>

                        {/* ================= FORM ================= */}
                        <form className="space-y-5">

                            {/* Full Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Email Address
                                </label>

                                <input
                                    value={email}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <input
                                        value={password}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Create a password"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-20 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>

                                <p className="mt-2 text-xs text-slate-400">
                                    Use at least 8 characters with a combination of letters and
                                    numbers.
                                </p>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <input
                                        value={password}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Confirm your password"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-20 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(!showConfirmPassword)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
                                    >
                                        {showConfirmPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-3 pt-1">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-indigo-600"
                                />

                                <label
                                    htmlFor="terms"
                                    className="text-sm leading-5 text-slate-500"
                                >
                                    I agree to the{" "}
                                    <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-700"
                                    >
                                        Terms & Conditions
                                    </button>{" "}
                                    and{" "}
                                    <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-700"
                                    >
                                        Privacy Policy
                                    </button>
                                    .
                                </label>
                            </div>

                            {/* Create Account Button */}
                            <button
                                onClick={signupHandler}
                                className="w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 active:scale-[0.99]"
                            >
                                Create Account
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="my-7 flex items-center gap-4">
                            <div className="h-px flex-1 bg-slate-200" />

                            <span className="text-xs text-slate-400">
                                OR
                            </span>

                            <div className="h-px flex-1 bg-slate-200" />
                        </div>

                        {/* Google */}
                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                            <span className="text-base font-bold">
                                G
                            </span>

                            Sign up with Google
                        </button>

                        {/* Login */}
                        <p className="mt-7 text-center text-sm text-slate-500">
                            Already have an account?{" "}
                            <button
                                type="button"
                                className="font-semibold text-indigo-600 transition hover:text-indigo-700"
                            >
                                <Link to='/login'>
                                    Sign in
                                </Link>
                            </button>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
