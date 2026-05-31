import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="py-5 border bg-orange-300 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
            <p>@{currentYear} Shivam Raj <span>All Rights Reserved</span></p>
            </div>
            <div className="flex space-x-5">
                <a href="/about" className="hover:underline">About</a>
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                <a href="/licensing" className="hover:underline">Licensing</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </div>
        </div>
    );
};

export default Footer;
