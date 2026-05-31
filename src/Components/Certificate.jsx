import React from 'react';
import p1 from "../certificate/p1.pdf"
import p2 from "../certificate/p2.pdf"
import p3 from "../certificate/p3.pdf"
import p4 from "../certificate/p4.pdf"
import p5 from "../certificate/p5.pdf"
import p6 from "../certificate/p6.pdf"

const certificates = [
    {
        title: 'Certificate in Web Development',
        issuer: 'Udemy',
        date: 'Sep 2022',
        description: 'Completed a comprehensive course on web development covering HTML, CSS, JavaScript.',
        link: p6
    },
    {
        title: 'Cisco CPP Certification',
        issuer: 'Cisco',
        date: 'Dec 2022',
        description: 'Learned and practiced Problems in C++.',
        link:p2
    },
    {
        title: 'Cisco Python Certification',
        issuer: 'Udemy',
        date: 'Mar 2023',
        description: 'Learned and practiced Problems in Python',
        link: p3
    },    {
        title: 'Cisco Cybersecurity',
        issuer: 'Cisco',
        date: 'June 2024',
        description: 'Learn about Cybersecurity fundamentals',
        link: p1
    },    {
        title: 'Certificate in SoftSkills',
        issuer: 'NPTEL',
        date: 'Sep 2023',
        description: 'Learn about Important Soft Skills',
        link:p5
    },    {
        title: 'Hacktoberfest Certification',
        issuer: 'Hacktoberfest',
        date: 'Dec 2023',
        description: 'Win digital reward kit for contribution in hacktoberfest',
        link: p4
    },   
    
];

const Certificate = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container certificates mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Certificates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((certificate, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                            <p className="text-gray-600 mb-1"><strong>Issuer:</strong> {certificate.issuer}</p>
                            <p className="text-gray-600 mb-1"><strong>Date:</strong> {certificate.date}</p>
                            <p className="text-gray-600">{certificate.description}</p>
                            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">View Certificate</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificate;