import React from 'react';
import { Shield, Eye, Lock, Database, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-red-700">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Shield className="h-5 w-5" />
            <span className="font-medium">Last updated: January 2025</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 text-yellow-600 mr-2" />
              Introduction
            </h2>
            <div className="space-y-4 text-red-700">
              <p>
                Marudhar Arts ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or participate in the 17th National Numismatic Exhibition (NNE 2026).
              </p>
              <p>
                By using our services, you consent to the data practices described in this policy. 
                If you do not agree with this policy, please do not use our services.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
              <Database className="h-6 w-6 text-yellow-600 mr-2" />
              Information We Collect
            </h2>
            <div className="space-y-4 text-red-700">
              <h3 className="text-lg font-semibold text-red-900">Personal Information</h3>
              <p>We may collect the following personal information when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Book tickets or stalls</li>
                <li>Register for the exhibition</li>
                <li>Contact us through our website</li>
                <li>Subscribe to our newsletter</li>
              </ul>
              
              <p className="mt-4">This information may include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email, phone, address)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Business information (for stall bookings)</li>
                <li>Special requirements or accessibility needs</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-red-900 mt-6">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Device information and operating system</li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">How We Use Your Information</h2>
            <div className="space-y-4 text-red-700">
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Delivery:</strong> Process bookings, send confirmations, and provide customer support</li>
                <li><strong>Communication:</strong> Send important updates about the exhibition, schedule changes, or safety information</li>
                <li><strong>Payment Processing:</strong> Handle transactions securely through our payment partners</li>
                <li><strong>Event Management:</strong> Organize seating, stall assignments, and special requirements</li>
                <li><strong>Marketing:</strong> Send promotional materials about future events (with your consent)</li>
                <li><strong>Analytics:</strong> Improve our website and services based on usage patterns</li>
                <li><strong>Legal Compliance:</strong> Meet regulatory requirements and protect our legal interests</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">Information Sharing & Disclosure</h2>
            <div className="space-y-4 text-red-700">
              <p>We may share your information in the following circumstances:</p>
              
              <h3 className="text-lg font-semibold text-red-900">Service Providers</h3>
              <p>We work with trusted third-party service providers who assist us with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment processing (payment gateways)</li>
                <li>Email communications</li>
                <li>Website hosting and analytics</li>
                <li>Event management services</li>
              </ul>

              <h3 className="text-lg font-semibold text-red-900 mt-4">Legal Requirements</h3>
              <p>We may disclose information when required by law or to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Comply with legal processes or government requests</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent fraud or security threats</li>
                <li>Enforce our Terms & Conditions</li>
              </ul>

              <h3 className="text-lg font-semibold text-red-900 mt-4">Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                as part of the business transaction.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
              <Lock className="h-6 w-6 text-yellow-600 mr-2" />
              Data Security
            </h2>
            <div className="space-y-4 text-red-700">
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Staff training on data protection</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect 
                your information, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">Your Privacy Rights</h2>
            <div className="space-y-4 text-red-700">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided below. 
                We will respond to your request within 30 days.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">Cookies & Tracking</h2>
            <div className="space-y-4 text-red-700">
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                and personalize content.
              </p>
              
              <h3 className="text-lg font-semibold text-red-900">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              
              <p className="mt-4">
                You can control cookies through your browser settings. However, disabling certain cookies 
                may affect website functionality.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">Data Retention</h2>
            <div className="space-y-4 text-red-700">
              <p>We retain your personal information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide our services and fulfill transactions</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records</li>
              </ul>
              <p className="mt-4">
                Generally, we retain booking information for 7 years for accounting and legal purposes. 
                Marketing data is retained until you opt out or request deletion.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">Children's Privacy</h2>
            <div className="space-y-4 text-red-700">
              <p>
                Our services are not directed to children under 13. We do not knowingly collect personal 
                information from children under 13. If you believe we have collected information from a 
                child under 13, please contact us immediately.
              </p>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">Policy Updates</h2>
            <div className="space-y-4 text-red-700">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on our website and updating the "Last Updated" date.
              </p>
              <p>
                Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100">
            <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center">
              <Mail className="h-5 w-5 text-green-600 mr-2" />
              Contact Us About Privacy
            </h2>
            <p className="text-red-700 mb-3">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-1 text-red-800">
              <p><strong>Privacy Officer:</strong> privacy@nne2026.com</p>
              <p><strong>General Contact:</strong> info@nne2026.com</p>
              <p><strong>Phone:</strong> +91-XX-XXXX-XXXX</p>
              <p><strong>Address:</strong> Marudhar Arts, Bengaluru, Karnataka, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;