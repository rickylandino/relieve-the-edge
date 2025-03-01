'use client'

import { navigationItems } from "./Navigation";

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
                    {navigationItems?.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900">
                            {item.name}
                        </a>
                    ))}
                </nav>
                <div className="mt-16 flex justify-center gap-x-10">
                <img
                    alt=""
                    src="logo1.jpg"
                    className="h-48 w-auto"
                    />
                </div>
                <p className="mt-10 text-center text-sm/6 text-gray-600">&copy; All rights reserved.</p>
            </div>
        </footer>
    )
}
