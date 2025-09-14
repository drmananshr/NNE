import React from 'react';
import { FileText, AlertTriangle, Shield, CreditCard } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">Terms & Conditions</h1>
          <p className="text-xl text-red-700">
            Please read these terms carefully before booking tickets or stalls
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full">
            <FileText className="h-5 w-5" />
            <span className="font-medium">Last updated: January 2025</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-amber-100 p-8 space-y-8">
          {/* General Terms */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 text-yellow-600 mr-2" />
              General Terms
            </h2>
            <div className="space-y-4 text-red-700">
              <p>
                By purchasing tickets or booking stalls for the 17th National Numismatic Exhibition (NNE 2026), 
                you agree to be bound by these Terms and Conditions. The exhibition is organised by Marudhar Arts 
                and will be held at Shikshak Sadan, KG Road, Majestic, Bengaluru from 20th-22nd February 2026.
              </p>
              <p>
                These terms constitute a legally binding agreement between you and Marudhar Arts. 
                If you do not agree to these terms, please do not proceed with any bookings.
              </p>
            </div>
          </section>

          {/* Ticket Terms */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">Ticket Booking Terms</h2>
            <div className="space-y-4 text-red-700">
              <h3 className="text-lg font-semibold text-red-900">Ticket Validity</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All tickets are valid only for the dates specified: 20th-22nd February 2026</li>
                <li>Single day passes are valid only for the selected date</li>
                <li>Three-day passes provide access to all three days of the exhibition</li>
                <li>Student tickets require valid student ID for entry</li>
                <li>Family packs include 4 three-day passes; children under 12 enter free with adult supervision</li>
              </ul>

              <h3 className="text-lg font-semibold text-red-900 mt-6">Refund Policy</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Full refund available up to 30 days before the event</li>
                <li>50% refund available 15-30 days before the event</li>
                <li>No refunds available within 15 days of the event</li>
                <li>Refunds will be processed within 7-10 business days</li>
                <li>Processing fees are non-refundable</li>
              </ul>

              <h3 className="text-lg font-semibold text-red-900 mt-6">Entry Requirements</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Valid photo ID required for entry</li>
                <li>Tickets are non-transferable</li>
                <li>Lost or damaged tickets cannot be replaced</li>
                <li>Entry may be refused for inappropriate behaviour or dress</li>
              </ul>
            </div>
          </section>

          {/* Stall Terms */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">Stall Booking Terms</h2>
            <div className="space-y-4 text-red-700">
              <h3 className="text-lg font-semibold text-red-900">Payment Terms</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>50% payment required to reserve a stall</li>
                <li>Full payment must be completed at least 1.5 months before the exhibition (by 6th January 2026)</li>
                <li>Failure to complete payment will result in stall cancellation</li>
                <li>Stall assignments are made on a first-come, first-served basis</li>
              </ul>

              <h3 className="text-lg font-semibold text-red-900 mt-6">Stall Usage</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Stalls must be used only for numismatic, philatelic, or related purposes</li>
                <li>No subletting or sharing of stalls without prior written consent</li>
                <li>Setup time: 8:00 AM - 9:00 AM daily</li>
                <li>Exhibition hours: 9:00 AM - 6:00 PM daily</li>
                <li>Breakdown time: 6:00 PM - 7:00 PM on final day</li>
              </ul>

              <h3 className="text-lg font-semibold text-red-900 mt-6">Stall Cancellation</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancellations more than 60 days before: 80% refund</li>
                <li>Cancellations 30-60 days before: 50% refund</li>
                <li>Cancellations less than 30 days before: No refund</li>
                <li>Organiser reserves the right to cancel stalls due to unforeseen circumstances</li>
              </ul>
            </div>
          </section>

          {/* Liability */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
              Liability & Insurance
            </h2>
            <div className="space-y-4 text-red-700">
              <p>
                <strong>Limited Liability:</strong> Marudhar Arts' liability is limited to the amount paid for tickets or stalls. 
                We are not responsible for any indirect, incidental, or consequential damages.
              </p>
              <p>
                <strong>Personal Property:</strong> Exhibitors and visitors bring items at their own risk. 
                We recommend comprehensive insurance for valuable items. Optional exhibition insurance is available for stall holders.
              </p>
              <p>
                <strong>Health & Safety:</strong> All participants must comply with venue safety regulations. 
                The organiser reserves the right to remove anyone who poses a safety risk.
              </p>
            </div>
          </section>

          {/* Photography & Media */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">Photography & Media Rights</h2>
            <div className="space-y-4 text-red-700">
              <p>
                By attending the exhibition, you consent to being photographed, filmed, or recorded for promotional purposes. 
                These materials may be used in future marketing without additional compensation.
              </p>
              <p>
                Photography of exhibits is permitted for personal use only. Commercial photography requires written permission 
                from both the organiser and the item owner.
              </p>
            </div>
          </section>

          {/* Force Majeure */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">Force Majeure</h2>
            <div className="space-y-4 text-red-700">
              <p>
                The organiser is not liable for any failure to perform due to circumstances beyond reasonable control, 
                including but not limited to natural disasters, government actions, strikes, or public health emergencies.
              </p>
              <p>
                In case of event cancellation due to force majeure, ticket holders will receive full refunds. 
                Stall holders will receive refunds minus any costs already incurred.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-red-900 mb-4">Governing Law</h2>
            <div className="space-y-4 text-red-700">
              <p>
                These terms are governed by the laws of India. Any disputes will be subject to the exclusive 
                jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-red-50 to-amber-50 rounded-lg p-6 border border-red-100">
            <h2 className="text-xl font-bold text-red-900 mb-3">Questions About These Terms?</h2>
            <p className="text-red-700 mb-3">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="space-y-1 text-red-800">
              <p><strong>Email:</strong> rm@marudhararts.com</p>
              <p><strong>Phone:</strong> +91-9243145999</p>
              <p><strong>Address:</strong> Marudhar Arts, Bengaluru</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;