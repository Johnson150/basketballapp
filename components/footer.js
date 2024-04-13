
import React from 'react';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-gray-800 text-white text-center p-4">
            <p className="text-sm">
                © {new Date().getFullYear()} NBA Player App. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
                <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
                <a href="/about" className="hover:text-gray-300">About Us</a>
                <a href="/contact" className="hover:text-gray-300">Contact Us</a>
            </div>
        </footer>
    );
}

export default Footer;
