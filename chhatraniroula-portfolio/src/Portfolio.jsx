import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Chhatra Bahadur Niroula</h1>
        <p className="text-lg mt-2">IT Systems Engineer & Systems Administrator</p>
      </header>

      {/* Professional Summary */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-5">Professional Summary</h2>
        <p className="text-gray-700">
          IT Systems Engineer & Systems Administrator with 6+ years of experience in fintech systems, 
          network architecture, and cybersecurity compliance. Skilled in designing scalable 
          infrastructure, ensuring regulatory compliance with PCI DSS and ISO 27001, and automation 
          using PowerShell and Bash. Certified Red Hat Engineer with expertise in Linux system 
          administration and enterprise IT environments.
        </p>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-5">Experience</h2>
        <div className="bg-white p-5 rounded-lg shadow-md mb-5">
          <h3 className="text-xl font-semibold">Systems Engineer - Khalti Pvt Ltd</h3>
          <p className="text-gray-600">Jan 2024 - July 2024</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Integrated fintech services with banks and third-party channels.</li>
            <li>Maintained core business applications, databases, and middleware.</li>
            <li>Ensured cybersecurity policies and compliance.</li>
          </ul>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md mb-5">
          <h3 className="text-xl font-semibold">Systems Administrator - Gateway Payment Service</h3>
          <p className="text-gray-600">Mar 2022 - Dec 2023</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Designed and implemented secure network infrastructure.</li>
            <li>Configured firewalls, VPNs, and security policies.</li>
            <li>Managed Active Directory, Exchange Server, and MFA systems.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-5">Technical Skills</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Networking & Security: TCP/IP, FortiGate, Cisco, VPN</li>
          <li>Cloud & Virtualization: VMware ESXi, vSphere</li>
          <li>Systems Administration: Linux, Windows Server, Active Directory</li>
          <li>Automation & Scripting: PowerShell, Bash, Ansible, Docker</li>
          <li>Database: MySQL, PostgreSQL, LAMP Stack</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-5">Certifications</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Red Hat Certified Engineer (RHCE) - 2017</li>
          <li>Red Hat Certified System Administrator (RHCSA) - 2017</li>
          <li>Python Certification - 2023</li>
          <li>ISO 27001 Information Security Management - 2020</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-5">Education</h2>
        <p className="text-gray-700">Bachelor of Science in Computing - Leeds Beckett University, 2017</p>
      </section>

      {/* Contact Section */}
      <footer className="text-center py-10 bg-gray-800 text-white">
        <h2 className="text-xl font-semibold">Contact Me</h2>
        <p>Email: <a href="mailto:findchhatra@gmail.com" className="underline">findchhatra@gmail.com</a></p>
        <p>Location: Al Karama, Dubai, UAE</p>
        <div className="flex justify-center gap-5 mt-4">
          <a href="https://www.linkedin.com/in/chhatran" className="text-2xl" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:findchhatra@gmail.com" className="text-2xl" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
