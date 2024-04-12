"use client";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();

    const navItems = [
        { label: "Home", href: "/home" },
        { label: "Modify", href: "/edit" },
        { label: "League Leaders", href: "/leader" },
        { label: "Search Player", href: "/search" },
    ];

    return (
        <div className="bg-gray-800 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center py-4">NBA Player App</h1>
                <ul className="flex justify-center gap-10">
                    {navItems.map((link, index) => (
                        <li key={index} className={`font-medium text-lg ${router.pathname === link.href ? "text-blue-500" : "text-gray-300 hover:text-white"}`}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
