import React from "react";

function Pricing() {
  return (
    <section id="pricing" className=" sm:px-8 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Pricing</h2>
        <p className="text-gray-600 mb-12">
          Choose the perfect plan for your business and let us drive your
          success.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Starter Plan
            </h3>
            <p className="text-gray-600 mt-4">
              Ideal for small businesses starting their digital journey.
            </p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-800">₦50,000</span>
              <span className="text-gray-600"> /month</span>
            </div>
            <ul className="mt-6 text-gray-600 text-left space-y-3">
              <li>✔ Social Media Management</li>
              <li>✔ Basic SEO Optimization</li>
              <li>✔ Email Marketing Campaigns</li>
              <li>✔ Monthly Analytics Report</li>
            </ul>
            <button className="mt-8 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Growth Plan */}
          <div className="bg-blue-100 shadow-lg rounded-lg p-6 border-2 border-blue-600">
            <h3 className="text-2xl font-semibold text-gray-800">
              Growth Plan
            </h3>
            <p className="text-gray-600 mt-4">
              For growing businesses looking to expand their reach.
            </p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-800">₦100,000</span>
              <span className="text-gray-600"> /month</span>
            </div>
            <ul className="mt-6 text-gray-600 text-left space-y-3">
              <li>✔ Everything in Starter</li>
              <li>✔ Advanced SEO Optimization</li>
              <li>✔ PPC Advertising Campaigns</li>
              <li>✔ Weekly Analytics Report</li>
            </ul>
            <button className="mt-8 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Premium Plan
            </h3>
            <p className="text-gray-600 mt-4">
              Perfect for established brands aiming for market dominance.
            </p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-800">₦200,000</span>
              <span className="text-gray-600"> /month</span>
            </div>
            <ul className="mt-6 text-gray-600 text-left space-y-3">
              <li>✔ Everything in Growth</li>
              <li>✔ Custom Marketing Strategies</li>
              <li>✔ AI-Driven Campaigns</li>
              <li>✔ Daily Analytics Report</li>
            </ul>
            <button className="mt-8 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
