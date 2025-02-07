"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/inkSyncLogo.png";
import { useState } from "react";
import styles from "./../../styles/signUp.module.css";

export default function Login() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col p-4">
            {/* Logo */}
            <div className="mb-8">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="inkSync Logo"
                        width={110}
                        height={40}
                        className="w-28"
                    />
                </Link>
            </div>

            {/* Form Container - Reduced padding and width */}

            <div className={`container bg-white rounded-lg shadow-md col-11 col-md-6 ${styles.BigContainer}`}>
                <h1 className={`text-2xl font-bold text-center mb-2 ${styles.dosis}`}>Login to your account</h1>
                <p className="text-gray-600 text-center mb-6" style={{ color: "#7f7f7f", fontWeight: "600", fontFamily: "Dosis" }}>Connect to your inkSync account</p>

                <form onSubmit={handleSubmit} className="space-y-2 p-6">

                    {/* Email Field */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className={`mb-2 text-sm font-medium text-gray-700 ${styles.dosis}`} style={{ marginTop: "20px", fontWeight: "bold" }}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control w-full border" style={{ borderRadius: "30px", paddingLeft: "12px" }}
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className={`mb-2 text-sm font-medium text-gray-700 ${styles.dosis}`} style={{ marginTop: "20px", fontWeight: "bold" }}>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-control w-full border" style={{ borderRadius: "30px", paddingLeft: "12px" }}
                            placeholder="Enter your password"
                            aria-describedby="passwordHelpInline"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            className={`w-full py-2 ${styles.submitButton}`}
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}