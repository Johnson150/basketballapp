"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/layout" },
        { label: "Modify", href: "/add" },
        { label: "League Leaders", href: "/leaders" },
        { label: "Search Player", href: "/search" },
    ];

    return (
        <div className="bg-gray-800 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center py-4">NBA Player App</h1>
                <ul className="flex justify-center gap-10">
                    {navItems.map((link, index) => (
                        <li key={index} className={`font-medium text-lg ${pathname === link.href ? "text-blue-500" : "text-gray-300 hover:text-white"}`}>
                            <Link href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
