// PrivacyPolicy.jsx
import React from 'react';
import Footer from '../component/Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 px-24 text-lg">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our e-commerce platform.
        </p>
      </div>
      <div className="space-y-10 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect personal information such as your name, email, phone number, shipping address, and payment details when you make a purchase or create an account. We may also collect non-personal information like browsing behavior, device type, and cookies to improve your shopping experience.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Your information is used to process orders, manage accounts, improve our services, and communicate with you regarding promotions or updates. We never sell your personal data to third parties.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Cookies & Tracking</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to provide personalized experiences, track usage, and analyze site performance. You can manage your cookie preferences in your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your payment information is securely processed and never stored on our servers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of every site you visit.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions or concerns about this privacy policy, please contact us at 
            <span className="text-blue-500 font-medium"> mtj3310@gmail.com  </span>.
          </p>
        </div>
      </div>

  
    </div>
    <Footer/>
    </>

  );
};

export default PrivacyPolicy;
