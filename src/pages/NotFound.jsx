import React from "react";
import { Link } from "react-router";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const NotFound = () => {
    return (
        <main className="min-h-[70vh] bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 mb-4">
                    Page not found
                </p>

                <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-orange-800 leading-none">
                    404
                </h1>

                <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
                    This page doesn&apos;t exist
                </h2>

                <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
                    The page you are looking for may have been moved, deleted, or the
                    address may be incorrect. You can return to the homepage or go back
                    to the previous page.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-green-700"
                    >
                        <FaHome />
                        Go to Homepage
                    </Link>

                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-700 px-6 py-3 font-semibold text-orange-800 transition duration-300 hover:bg-orange-50"
                    >
                        <FaArrowLeft />
                        Go Back
                    </button>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
