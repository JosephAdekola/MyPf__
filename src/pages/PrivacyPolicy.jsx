import React from "react";
import Meta from "../components/Meta";

export default function PrivacyPolicy() {
  return (
    <div className='min-w-full min-h-screen bg-gradient-to-tr from-[#4e2946] via-[#4e2946] 
        to-[#f58634] pt-[100px] px-2 md:px-10 border border-[#a1368f00]'>
      {/* ✅ Page-specific SEO meta */}
      <Meta
        title="Privacy Policy – Joseph Adekola"
        description="Read the privacy policy for JosephAdekola.com to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, Joseph Adekola, website privacy"
        ogTitle="Privacy Policy – Joseph Adekola"
        ogDescription="Details about the privacy policy of JosephAdekola.com."
        ogImage="/privacy-cover.jpg"
        robots="noindex, nofollow" // 👈 This tells search engines to skip this page
      />

      <div className="max-w-4xl mx-auto text-white ">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Last Updated: August 9, 2025</p>

        <p className="mb-4">
          Welcome to <a href="https://www.josephadekola.com">JosephAdekola.com</a>. 
          Your privacy is important to us. This Privacy Policy outlines how we
          collect, use, and protect your personal information when you visit our
          website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information that you voluntarily provide, such
          as your name, email address, and any other details you submit through
          contact forms or newsletter signups.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          We use your information to respond to inquiries, send updates, and
          improve our website’s content and functionality.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies</h2>
        <p className="mb-4">
          Our site may use cookies to enhance user experience. You can disable
          cookies through your browser settings, but some features of the site
          may not function properly.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services (e.g., analytics, advertising) that
          collect, monitor, and analyze data to help us improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Data Protection</h2>
        <p className="mb-4">
          We implement security measures to protect your personal information.
          However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the right to request access to, correction of, or deletion of
          your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with a new “Last Updated” date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at: <a href="mailto:hello@josephadekola.com">info@josephadekola.com</a>.
        </p>
      </div>
    </div>
  );
}
