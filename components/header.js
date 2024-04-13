import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Modify", href: "/edit" },
        { label: "League Leaders", href: "/leader" },
        { label: "Logout", href: "/logout" },
    ];

    return (
        <>
            <div className="flex items-center justify-between bg-gray-800 text-white shadow-lg w-full px-4 py-2">
                <div className="flex items-center space-x-4">
                    <img src="/NBA logo.jpg" alt="NBA Logo" className="h-12 w-auto" />
                    <h1 className="text-3xl font-bold text-white">NBA Player App</h1>
                </div>
                <ul className="flex justify-center gap-10">
                    {navItems.map((link, index) => (
                        <li key={index} className={`font-medium text-lg ${router.pathname === link.href ? "text-blue-500" : "text-gray-300 hover:text-white"}`}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;
